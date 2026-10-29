"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useI18n } from "../../lib/i18n/provider";
import s from "./sdg-context-section.module.css";

const sources = [
  { title: "PBB — SDG 11 · Kota berkelanjutan", image: "sdg-reference", href: "https://sdgs.un.org/goals/goal11" },
  { title: "PBB — SDG 12 · Konsumsi bertanggung jawab", image: "who-reference", href: "https://sdgs.un.org/goals/goal12" },
] as const;

export default function SdgContextSection() {
  const { t } = useI18n();
  return <section id="tujuan-keberlanjutan" className={s.section} aria-labelledby="sdg-context-title">
    <div className={s.overview}>
      <div className={s.copy}>
        <span className={s.eyebrow} data-landing-enter="eyebrow">{t("SDG 11 utama · SDG 12 pendukung")}</span>
        <h2 id="sdg-context-title" className={s.title} data-landing-enter="heading"><span>{t("Kota berkelanjutan,")}</span>{" "}<em>{t("dimulai dari bukti yang jelas.")}</em></h2>
        <p className={s.description} data-landing-enter="copy" data-landing-order="1">{t("SDG 11 menjadi fokus utama VERGO melalui target 11.6: mendokumentasikan kejadian sampah perkotaan, meninjau bukti, dan merangkum laporan pada peta area. SDG 12 mendukungnya melalui target 12.5 dan 12.8: pengenalan material, edukasi penanganan sampah, serta kegiatan warga dengan hasil yang terdokumentasi.")}</p>
        <p className={s.limit} data-landing-enter="card" data-landing-order="2">{t("VERGO mendukung tujuan SDG melalui informasi dan tindak lanjut yang dapat ditelusuri. Jumlah laporan bukan ukuran pencemaran, pengurangan sampah, atau pencapaian indikator resmi SDG.")}</p>
      </div>
      <div className={s.visual} data-landing-enter="hero-card">
        <div className={s.scene} data-landing-float="art"><Image src="/images/landing-health/environment.webp" alt={t("Ilustrasi rumah, pepohonan, dan warga membersihkan lingkungan.")} fill sizes="(max-width: 760px) 90vw, (max-width: 1100px) 46vw, 640px" /></div>
      </div>
    </div>
    <div className={s.references} aria-labelledby="sdg-sources-title">
      <h3 id="sdg-sources-title" data-landing-enter="heading">{t("Rujukan")}</h3>
      <div className={s.sourceGrid}>{sources.map(({ title, image, href }, index) => <a key={image} className={s.sourceCard} href={href} target="_blank" rel="noopener noreferrer" aria-label={t("Buka rujukan {0} di tab baru", { "0": t(title) })} data-landing-enter="card" data-landing-order={index}>
        <span className={s.sourceArtwork} data-landing-float="art"><Image src={`/images/landing-health/${image}.webp`} alt="" fill sizes="(max-width: 480px) 90px, (max-width: 760px) 140px, 210px" /></span>
        <span className={s.sourceTitle}>{t(title)}</span>
        <span className={s.externalIcon} aria-hidden="true"><ExternalLink size={24} strokeWidth={1.8} /></span>
      </a>)}</div>
    </div>
  </section>;
}
