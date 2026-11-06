# Portfolio 2026 – Adi Dwi Danisworo

Situs portofolio statis (HTML, CSS, JavaScript). Tanpa database, tanpa Supabase, tanpa proses build, jadi langsung bisa di-deploy ke Vercel.

## Isi folder

- `index.html`: semua teks dan link (tentang, karya, video, gear, pengalaman, kontak)
- `style.css`: warna dan tata letak. Warna utama ada di bagian `:root` paling atas.
- `script.js`: pratinjau gambar saat diketuk
- `assets/images/`: foto. Untuk mengganti foto, timpa file dengan nama yang sama.
- `vercel.json`: pengaturan cache untuk Vercel

## Cara mengedit

- **Teks:** buka `index.html`, ubah teks di antara tag.
- **Video:** ganti link Google Drive di bagian `class="vid"`. Pastikan akses file diatur ke "Siapa saja yang memiliki link".
- **Judul video:** ubah tulisan di dalam `<b>...</b>`.
- **Karya baru:** salin satu blok `<img ...>` di dalam `class="mosaic"`, lalu ganti `src` dan `alt`.
- **Kontak:** ubah link di bagian `id="kontak"`.

## Cara deploy ke Vercel

1. Buat repository baru di GitHub, lalu unggah seluruh isi folder ini.
2. Buka vercel.com, masuk dengan akun GitHub, pilih **Add New > Project**, lalu pilih repository tadi.
3. Pada **Framework Preset** pilih **Other**. Kosongkan Build Command dan Output Directory, lalu klik **Deploy**.

Setelah selesai, situs aktif di alamat `nama-project.vercel.app`. Setiap kali kamu mengubah file di GitHub, Vercel memperbaruinya otomatis.

Alternatif tanpa GitHub: jalankan `npx vercel` di dalam folder ini.

## Tes di komputer

Buka `index.html` di browser, atau jalankan `npx serve` di dalam folder ini.
