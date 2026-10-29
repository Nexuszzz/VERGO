import type { Metadata, Viewport } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import { LocaleProvider } from "../lib/i18n/provider";
import { getSavedLocale } from "../lib/i18n/server";
import { translate } from "../lib/i18n/translate";
import "./globals.css";
import "./motion.css";
import "leaflet/dist/leaflet.css";
import MotionEnhancer from "../components/motion/motion-enhancer";
import { BRAND } from "../lib/brand";

const display = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  interactiveWidget: "resizes-content",
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getSavedLocale();
  const t = (source: string) => translate(locale, source);
  return {
    metadataBase: new URL(process.env.APP_ORIGIN || "https://vergo.venlab.tech"),
    title: BRAND.title,
    description: t("VERGO menghubungkan laporan sampah berbasis bukti, tinjauan manusia, dan tindak lanjut untuk mendukung SDG 11 serta SDG 12."),
    openGraph: {
      title: BRAND.title,
      description: t("Pelaporan sampah terverifikasi untuk kota berkelanjutan dan penanganan sampah yang bertanggung jawab."),
      type: "website",
      locale: locale === "en" ? "en_GB" : "id_ID",
    },
  };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = await getSavedLocale();
  return (
    <html lang={locale} className={`${display.variable} ${body.variable}`}>
      <body><LocaleProvider initialLocale={locale}><MotionEnhancer />{children}</LocaleProvider></body>
    </html>
  );
}
