# Kontribusi VERGO pada SDG 11 dan SDG 12

Diperbarui 29 Oktober 2026. **SDG 11 adalah fokus utama; SDG 12 adalah pendukung.** Narasi ini mengikuti presentasi FunDev 2026 yang diberikan pemilik proyek dan disesuaikan dengan kemampuan source VERGO. Rujukan ini mengatur klaim produk, bukan mengubah keputusan moderator atau rumus peta.

## SDG 11 utama: Kota dan Permukiman yang Berkelanjutan

**Target 11.6** mencakup pengurangan dampak lingkungan perkotaan dengan perhatian pada pengelolaan sampah. Kontribusi VERGO berada pada informasi, peninjauan dan akuntabilitas: warga mendokumentasikan kondisi; moderator meninjau bukti; kejadian yang memenuhi syarat dapat dirangkum secara geografis; pihak terkait dapat mencatat respons.

| Kemampuan source | Hubungan dengan kebutuhan perkotaan | Batas bukti |
| --- | --- | --- |
| Laporan foto, lokasi, waktu kejadian dan konteks | Pengamatan sampah memiliki konteks yang dapat ditinjau dan ditelusuri. | Foto tidak membuktikan sendiri lokasi, tanggal, berat, bahaya atau seluruh dugaan pelapor. |
| Moderasi manusia dan canonical/duplicate | Informasi publik serta ringkasan area memakai kejadian yang memenuhi aturan kelayakan; duplikat tidak dihitung sebagai kejadian baru. | Terverifikasi berarti bukti ditinjau, belum berarti sampah dibersihkan. |
| Peta dan ringkasan H3 | Pengguna dapat melihat konsentrasi kejadian terverifikasi, kategori, periode dan pengulangan pengamatan. | Rendah/sedang/tinggi adalah tingkat kejadian berdasarkan laporan; tidak mengukur polusi. Belum ada data bukan bukti bersih. |
| Pembaruan kondisi, penugasan, hasil kegiatan dan resolusi | Progres dan bukti hasil dapat ditautkan ke kejadian serta ditinjau. | Respons lapangan memerlukan pelaksana nyata; aplikasi tidak mengirim petugas secara otomatis. |

Indikator resmi **11.6.1** berkaitan dengan proporsi sampah perkotaan yang dikumpulkan dan dikelola dalam fasilitas terkendali. Jumlah laporan atau titik H3 tidak mempunyai cakupan maupun denominator yang sama; angka VERGO tidak boleh dilabeli sebagai pencapaian indikator ini.

## SDG 12 pendukung: Konsumsi dan Produksi yang Bertanggung Jawab

| Target | Kontribusi yang didukung source | Cara menyatakan hasil |
| --- | --- | --- |
| **12.5**, pencegahan, pengurangan, daur ulang dan penggunaan kembali | Scan material opsional, panduan penanganan, kegiatan warga, hasil kegiatan dan pengukuran berbukti. | Nyatakan material yang disarankan atau hasil kegiatan yang ditinjau. Berat hanya dilaporkan jika ada pengukuran, satuan, metode dan bukti yang relevan. Scan/foto/laporan tidak dikonversi menjadi kilogram daur ulang. |
| **12.8**, informasi dan kesadaran keberlanjutan | Materi edukasi, bantuan VERA, panduan pelaporan serta dokumentasi aksi komunitas. | Nyatakan tersedianya informasi dan partisipasi tercatat. Dampak pada kesadaran atau perilaku memerlukan evaluasi pengguna; tidak disimpulkan hanya dari jumlah kunjungan. |

ML EcoLens adalah integrasi opsional di source dan **belum dipasang pada VPS saat pembaruan ini**. Pelaporan langsung, moderasi dan peta tidak memerlukan scan terlebih dahulu. VERA dan reviewer Hermes menggunakan provider model melalui gateway 9Router; keduanya tidak menggantikan moderator manusia.

## Indikator pilot tingkat platform

Ukuran berikut adalah rancangan evaluasi. Ketersediaan histori dan query harus diperiksa sebelum menerbitkan angka:

1. Kejadian unik terverifikasi, dikelompokkan menurut periode waktu kejadian, kategori dan area H3. Dedup mengikuti [aturan peta](HOTSPOT_RULES.md); kejadian selesai yang masih masuk periode historis tidak dihitung sebagai kejadian terbuka.
2. Waktu dari laporan dikirim hingga keputusan moderator, disertai jumlah sampel dan keputusan yang disertakan. Pembaruan/keputusan ulang dibedakan dari keputusan pertama.
3. Kelengkapan foto, waktu dan konteks pada pengiriman serta jumlah permintaan bukti tambahan.
4. Jumlah kejadian dengan tindak lanjut terdokumentasi dan proporsinya terhadap kejadian eligible dalam periode yang didefinisikan. Bedakan progres, penyelesaian dan laporan yang belum mempunyai pelaksana.
5. Hasil kegiatan yang disetujui dan pengukuran yang memiliki bukti. Bedakan tahap dikumpulkan, diserahkan dan didaur ulang serta identitas batch agar satu material tidak dihitung berulang sebagai dampak baru.
6. Partisipasi kegiatan serta hasil evaluasi edukasi. Kehadiran dan pemahaman pengguna merupakan ukuran yang berbeda.

Sebutkan sumber data, waktu snapshot, periode, aturan kelayakan dan nilai yang belum tersedia. Data demonstrasi harus ditandai sebagai pengujian. Klaim penurunan sampah, peningkatan daur ulang atau perubahan perilaku baru disampaikan bila didukung data lapangan dan metode evaluasi.

## Acuan dan implementasi

- [UN SDG 11](https://sdgs.un.org/goals/goal11), terutama target 11.6 dan indikator 11.6.1.
- [UN SDG 12](https://sdgs.un.org/goals/goal12), terutama target 12.5 dan 12.8.
- Presentasi pemilik proyek, `VERGO_FunDev_2026_13_Slides_Terbaru.pdf.pdf`, 13 slide, 29 Oktober 2026: slide 3 menetapkan hierarki SDG; slide 4–10 menjelaskan pelaporan, moderasi, peta dan tindak lanjut; slide 13 memisahkan rencana pilot dari hasil terukur. PDF tidak disalin ke repository.
- SHA-256 materi acuan: `16ab48334ca7373d39514f0297310ba2039d73676686b3855cffd9861705598b`.
- [Rencana FunDev](RENCANA_FUNDEV_2026.md), [ringkasan source](RINGKASAN_PROYEK.md), [kontrak domain](CONTRACT_ZAKA_ZAMANI.md), [aturan area](HOTSPOT_RULES.md).
