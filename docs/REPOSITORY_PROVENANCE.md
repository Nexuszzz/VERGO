# Repository provenance

Prepared on 29 October 2026.

## Source snapshot

This competition submission starts with the tracked source tree from
[sitaurs/VERGO](https://github.com/sitaurs/VERGO) at revision
[`93d49a9d657a1876abd3562a4e32e27f81c135c2`](https://github.com/sitaurs/VERGO/commit/93d49a9d657a1876abd3562a4e32e27f81c135c2).
That revision supplies the operational VPS release at the time of preparation.

The submission repository has a new root commit. Earlier commit history remains
in the operational repository; this snapshot does not represent the date when
all included code was first developed. The import commit records preparation of
the submission package and does not assign sole authorship of its contents.

Existing human development credits include:

- [Naufal Muhammad Dzaka / Nexuszzz](https://github.com/Nexuszzz).
- [sitaurs](https://github.com/sitaurs).

Third-party notices and the [EcoLens source audit](SOURCE_AUDIT.md) remain in place.

## Submission changes

- English is the main README language; `README.id.md` retains the Indonesian version.
- The interface keeps its existing English default and saved language preferences.
- SDG 11 (target 11.6) remains primary; SDG 12 (targets 12.5 and 12.8) remains supporting.
- Submission clone links and the container source label point to `Nexuszzz/VERGO`.
- Local Git hooks check commit identity, co-author trailers, and pushed history.
- Private environments, database dumps, VPS recovery archives, and provider credentials are excluded.

Application code is unchanged from the source revision. The container source label
identifies this repository; it does not change application runtime behaviour.
The import does not activate EcoLens ML, change feature flags, or redeploy the VPS.

## Repository relationship

`Nexuszzz/VERGO` is the submission repository. The operational repository keeps
its existing history and deployment workflow. Changes here do not automatically
update the running VPS. Later updates should be brought across as reviewed file
changes if the repositories need to remain independent; merging the original
history would also import its commit metadata.

## Commit identity safeguards

After cloning, configure your own Git identity and enable the local hooks:

```sh
git config user.name "Your Name"
git config user.email "YOUR_GITHUB_LINKED_EMAIL"
git config core.hooksPath .githooks
node scripts/check-git-attribution.mjs --all
```

The checks inspect author and committer identities, co-author trailers, and the
history reachable from each pushed ref. They do not change commit identities or
remove credit. Hooks are local and may be bypassed; collaborators must still
review metadata before publishing. GitHub contributor displays are calculated
by GitHub and should be checked after publication.
