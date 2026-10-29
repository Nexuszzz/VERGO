# Runbook source dan deployment VPS VERGO

Diperbarui 29 Oktober 2026. Branch **`main`** menjadi sumber kode VPS. **`codex/vercel-deploy`** adalah branch adaptasi Vercel yang dikelola terpisah. Checkout lokal untuk pekerjaan VPS dibuat terpisah agar pekerjaan yang belum di-commit pada checkout Vercel tetap terjaga.

## Struktur runtime

| Komponen | Lokasi atau pengaturan |
| --- | --- |
| Source release | `/opt/vergo/releases/<commit>/app`, checkout Git `main` pada revisi rilis. |
| Path aplikasi tetap | `/opt/vergo/app`, symlink ke source release aktif. |
| Aplikasi | Compose project `deploy`; web, API, worker, PostgreSQL dan Redis. |
| Image rilis | `vergo-runtime:<commit>` dengan label `org.opencontainers.image.revision`. |
| Pilihan image aktif | `/etc/sap/release.override.json`, berisi referensi image web/API/worker; konfigurasi privat operator. |
| Rahasia runtime | `/etc/sap/api.env`, `web.env`, `db.env`, `hermes-review.env`; permission 600. |
| Gateway 9Router | `/opt/9router/docker-compose.yml` dan data privat `/opt/9router/data`; port host hanya loopback. Terhubung ke jaringan Docker `sap`. |
| Reviewer Hermes | `sap-hermes-review.service`; source wrapper `/opt/sap/hermes-review`; runtime pinned terpisah. Bind pada gateway privat Docker, bukan IP publik. |
| Reverse proxy | Nginx menerima HTTPS, meneruskan ke web loopback, lalu proxy satu origin menuju API. |
| Object storage | Bucket Cloudflare R2 privat dengan kredensial pada env server. |
| Backup database | `sap-db-backup.timer` menjalankan backup harian ke R2; service memakai `SAP_APP_DIR=/opt/vergo/app`. |

PostgreSQL, Redis, Hermes dan port gateway model tidak dipublikasikan ke internet. VERA memakai `SAPA_LLM_BASE_URL` pada gateway 9Router privat, model `sapa`; reviewer memakai model `combo-hermes`. Provider credential hanya berada pada server dan backup privat.

ML EcoLens belum dipasang pada deployment ini. Koneksi Gradio yang tersedia di source merupakan kemampuan opsional; tidak menjadi bukti scan ML aktif. Pelaporan manual, moderasi dan peta tetap memiliki jalur sendiri.

## Prosedur pembaruan

1. Pastikan perubahan sudah dicatat di `main`, periksa commit GitHub dan ambil backup konfigurasi, database serta referensi image aktif. Simpan backup di direktori privat di luar checkout.
2. Clone repository ke direktori release baru dan checkout commit yang akan dijalankan. Jangan menyalin `.env` atau backup provider ke Git. Catat hasil `git rev-parse HEAD`.
3. Build image baru menggunakan Dockerfile repository:

       docker build -f deploy/Dockerfile --build-arg VCS_REF=<commit> -t vergo-runtime:<commit> .

4. Simpan referensi image sebelumnya untuk rollback. Buat `/etc/sap/release.override.json` dengan image baru yang sama untuk service `api`, `worker` dan `web`. Pindahkan symlink `/opt/vergo/app` ke checkout release yang sudah dibangun. Pada migrasi awal dari source arsip, pindahkan direktori lama ke folder cadangan terlebih dahulu.
5. Gunakan project yang sama dan larang build ulang saat aktivasi:

       docker compose -p deploy -f /opt/vergo/app/deploy/compose.yml -f /etc/sap/release.override.json up -d --no-build --no-deps api worker web

6. Pastikan wrapper Hermes di `/opt/sap/hermes-review` sama dengan `services/hermes-review` pada commit aktif. Pada sinkronisasi ini timeout health provider adalah 10 detik, sesuai latensi registry 9Router; batas review tetap mengikuti env. Pertahankan ownership/permission service.
7. Periksa kesiapan dan fungsi yang berubah. Catat commit, image, waktu, skenario serta hasil pada metadata rilis di server. Jika ada migrasi database, evaluasi kompatibilitas dan jalankan secara terpisah sebelum cutover; perubahan narasi SDG tidak memerlukan migrasi.

## Pemeriksaan source dan layanan

    git -C /opt/vergo/app status --short -b
    git -C /opt/vergo/app rev-parse HEAD
    docker compose -p deploy -f /opt/vergo/app/deploy/compose.yml -f /etc/sap/release.override.json ps
    docker inspect deploy-web-1 --format '{{ index .Config.Labels "org.opencontainers.image.revision" }}'
    curl -fsS http://127.0.0.1:3200/api/v1/health/ready
    systemctl is-active sap-hermes-review nginx
    docker exec deploy-worker-1 node -e 'fetch(process.env.HERMES_REVIEW_URL+"/health").then(async r=>console.log(r.status,await r.text()))'

Health API memeriksa database, Redis dan object storage. Halaman HTML 200 belum membuktikan interaksi browser, pengiriman email, publikasi Instagram atau semua provider berhasil. Gunakan skenario yang sesuai dan hindari memublikasikan data uji.

## Rollback dan backup

Pertahankan source release sebelumnya, referensi image dan salinan override sebelum aktivasi. Jika pemeriksaan gagal, pulihkan symlink serta override lama dan jalankan kembali Compose dengan `--no-build`. Jangan menimpa database dengan dump lama untuk rollback perubahan teks. Kembalikan wrapper Hermes jika versinya berubah dan perlu di-rollback.

Backup untuk pemulihan meliputi dump PostgreSQL, semua env privat, Nginx/TLS renewal, Compose, unit systemd, runtime/source pinned Hermes, basis data idempotensi, serta snapshot SQLite konsisten dari 9Router berikut rahasia gateway dan provider. R2 merupakan layanan eksternal; dump database tidak memuat objek bucket. Backup yang memuat secret tetap berada di penyimpanan privat dan tidak di-commit.
