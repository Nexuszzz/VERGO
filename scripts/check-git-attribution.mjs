#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const disallowedIdentity = /\b(?:codex|claude|anthropic|openai)\b/i;
const args = process.argv.slice(2);
const git = (...values) => execFileSync('git', values, {
  encoding: 'utf8', maxBuffer: 32 * 1024 * 1024,
});

function checkIdentity(value, context) {
  if (disallowedIdentity.test(value)) {
    throw new Error(`${context}: configure the responsible human contributor's Git identity.`);
  }
}

function checkMessage(message, context) {
  for (const match of message.matchAll(/^Co-authored-by:\s*(.+)$/gim)) {
    checkIdentity(match[1], `${context} co-author`);
  }
}

function checkHistory(revisions) {
  let count = 0;
  const output = git('log', '--format=%H%x00%an%x00%ae%x00%cn%x00%ce%x00%B%x00%x00', ...revisions, '--');
  for (const record of output.split('\0\0')) {
    if (!record.trim()) continue;
    const [rawSha, authorName, authorEmail, committerName, committerEmail, message] = record.split('\0');
    const sha = rawSha.trim();
    if (!/^[0-9a-f]{40,64}$/.test(sha) || message === undefined) {
      throw new Error('Could not parse Git history; publication audit stopped.');
    }
    checkIdentity(`${authorName} <${authorEmail}>`, `${sha.slice(0, 12)} author`);
    checkIdentity(`${committerName} <${committerEmail}>`, `${sha.slice(0, 12)} committer`);
    checkMessage(message, sha.slice(0, 12));
    count += 1;
  }
  return count;
}

try {
  if (args.length === 1 && args[0] === '--identity') {
    checkIdentity(git('var', 'GIT_AUTHOR_IDENT'), 'Pending author');
    checkIdentity(git('var', 'GIT_COMMITTER_IDENT'), 'Pending committer');
    console.log('Commit identities accepted.');
  } else if (args.length === 2 && args[0] === '--message') {
    checkMessage(readFileSync(args[1], 'utf8'), 'Pending commit');
    console.log('Co-author metadata accepted.');
  } else if (args.length === 1 && args[0] === '--all') {
    console.log(`Attribution audit passed: ${checkHistory(['--all'])} reachable commit(s).`);
  } else if (args.length === 1 && args[0] === '--push') {
    const revisions = [];
    for (const line of readFileSync(0, 'utf8').split('\n').filter(Boolean)) {
      const fields = line.trim().split(/\s+/);
      if (fields.length !== 4 || !/^[0-9a-f]{40,64}$/.test(fields[1])) {
        throw new Error('Could not parse pre-push refs; publication audit stopped.');
      }
      if (!/^0+$/.test(fields[1])) revisions.push(fields[1]);
    }
    if (revisions.length) {
      console.log(`Pre-push attribution audit passed: ${checkHistory([...new Set(revisions)])} commit(s).`);
    }
  } else {
    throw new Error('Usage: node scripts/check-git-attribution.mjs --identity | --message FILE | --all | --push');
  }
} catch (error) {
  console.error(`Attribution check failed: ${error.message}`);
  process.exitCode = 1;
}
