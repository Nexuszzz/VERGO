# Rencana VERGO untuk FunDev 2026

Diperbarui 29 Oktober 2026. Acuan narasi: presentasi 13 slide milik tim, **SDG 11 utama (11.6)** dan **SDG 12 pendukung (12.5, 12.8)**. Pemetaan fitur dan batas klaim ada di [SDG_ALIGNMENT.md](SDG_ALIGNMENT.md).

## 1. Pesan produk

**VERGO — Verify and Go. Foto. Verifikasi. Tindak lanjut.** Platform menghubungkan pengamatan sampah, laporan berbukti, pemeriksaan manusia, ringkasan geografis dan tindak lanjut yang terdokumentasi. Kategori material dari AI bersifat saran; verifikasi laporan dan resolusi tetap keputusan manusia.

## 2. Kesesuaian presentasi dan demonstrasi

| Slide | Pesan yang dipertahankan | Bukti atau batas demonstrasi |
| --- | --- | --- |
| 1 | Identitas VERGO dan alur Photo. Verify. Act. | Gunakan nama dan domain kanonik yang sama dengan produk. |
| 2 | Tantangan pelaporan serta akuntabilitas pengelolaan sampah | Statistik global adalah konteks dari sumber PBB, bukan hasil penggunaan VERGO. |
| 3 | SDG 11 utama; SDG 12 pendukung | Sebut 11.6, 12.5 dan 12.8 serta kontribusi yang dapat ditelusuri. |
| 4–5 | Dokumentasikan, tinjau, jelajahi, tindak lanjuti | Laporan baru tidak otomatis menjadi publik. |
| 6 | Scan material opsional | EcoLens belum dipasang pada VPS. Jangan menyajikan scan seolah aktif pada deployment tanpa ML; gunakan laporan langsung untuk demo utama. |
| 7 | Foto, lokasi, waktu kejadian dan konteks | Original privat dan koordinat presisi tidak otomatis dipublikasikan; antarmuka konseptual dibedakan dari aplikasi aktual. |
| 8 | Tinjauan moderator dan arti status | Terverifikasi tidak sama dengan terselesaikan. |
| 9 | Ringkasan H3, periode, kategori dan tingkat kejadian | Warna menunjukkan pola laporan; bukan ukuran polusi. Tidak ada data tidak berarti bersih. |
| 10 | Progres dan resolusi dengan bukti | Kegiatan/pembaruan hanya ditunjukkan jika modul dan izin tersedia; tidak ada pengiriman petugas otomatis. |
| 11 | Next.js, NestJS, PostgreSQL/PostGIS, Redis/BullMQ, H3 dan R2 | Integrasi ML di arsitektur dibedakan dari layanan yang benar-benar aktif. |
| 12 | Satu kejadian yang dapat ditelusuri | Tandai data uji dan gunakan izin per peran. Tidak memublikasikan media tanpa persetujuan. |
| 13 | Pilot dan indikator berikutnya | Kejadian unik, waktu moderasi, tindak lanjut serta hasil kegiatan adalah rencana pengukuran; tidak mengarang hasil lapangan. |

## 3. Alur demo utama tanpa ML

1. Pengguna mengirim laporan dengan foto aman, lokasi, waktu dan keterangan; tampilkan tanda terima dan status pemeriksaan.
2. Moderator membuka bukti privat dan memberi keputusan atau meminta bukti tambahan. Saran Hermes hanya menjadi bantuan peninjauan.
3. Buka kejadian yang memenuhi syarat di halaman publik dan ringkasan area; tunjukkan periode, metode dan arti belum ada data.
4. Jika tersedia, catat tindak lanjut atau kegiatan beserta bukti. Jelaskan persetujuan resolusi terpisah dari verifikasi awal.
5. Tunjukkan panduan VERA dan edukasi material sebagai dukungan pada target 12.8; jangan mengklaim perilaku warga telah berubah tanpa evaluasi.

## Gerbang rilis

- Narasi landing, metadata, bahasa Indonesia/Inggris dan README konsisten pada hierarki SDG serta targetnya.
- Sumber `main` lokal, GitHub dan source release VPS mengacu ke commit yang sama; image yang dijalankan mencatat revisi sumber.
- Perubahan lokal lama yang belum di-commit dipertahankan di checkout asal; checkout versi VPS dikelola terpisah.
- Build dan pemeriksaan yang relevan lulus. Jalur masuk, daftar laporan, moderasi/peta dan provider pendukung dibuktikan sesuai skenario serta tanggalnya.
- Database, Redis dan R2 siap; backup serta konfigurasi pemulihan tersedia secara privat.
- ML belum dipasang; presentasi dan demo menjelaskan batas ketersediaannya.
- Tidak ada angka dampak, akurasi, kemitraan atau kegiatan lapangan yang dibuat-buat. Data pengujian dibedakan dari kejadian nyata.

Panduan VPS: [DEPLOYMENT_VPS.md](DEPLOYMENT_VPS.md). [Catatan ITASE](RENCANA_ITASE_2026.md) menyimpan aturan dan tanggal kompetisi sebelumnya. Guidebook FunDev belum diberikan pada pembaruan ini; jadwal, bobot penilaian, durasi dan ketentuan administrasi ITASE tidak diperlakukan sebagai ketentuan FunDev.
