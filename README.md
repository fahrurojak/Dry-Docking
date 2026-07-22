# Dry Docking Management System

## 🌟 Deskripsi Proyek (FRD - Functional Requirements Document)
**Dry Docking Management System** adalah sebuah aplikasi web modern untuk mengelola jadwal, spesifikasi, dan estimasi biaya perbaikan kapal (dry docking). Aplikasi ini dibangun dengan mengutamakan **UI/UX premium, aksesibilitas tinggi, dan performa yang cepat**. 

Aplikasi ini meniru struktur dan fungsionalitas utama dari referensi Glide app yang diberikan, namun dengan desain yang jauh lebih *epic*, *clean*, dan profesional.

---

## ✨ Fitur Utama (Features)

1. **Desain UI/UX Premium (Bright Glassmorphism)**
   - *Splash Screen* interaktif dengan animasi "Bright Frosted Glass Waves" yang memukau.
   - Tema warna biru profesional dan menyegarkan (`#38bdf8` hingga `#0ea5e9` dan biru pekat).
   - *Glassmorphism effect* (kaca buram) pada kartu status dan logo.
   - *Hover animations* yang halus (kartu sedikit terangkat dan zoom in).
   - Penggunaan bayangan (*shadows*) yang terukur untuk kedalaman elemen.
   
2. **Dark Mode (Mode Gelap) Terintegrasi**
   - *Toggle Switch* berbentuk pil di pojok kanan atas (icon matahari & bulan).
   - Transisi warna yang halus (*smooth transitions*) saat berganti tema.
   - Semua elemen (sidebar, tabel, kartu, dropdown) 100% mendukung mode gelap.

3. **Panel Aksesibilitas Khusus**
   - **Font Scaling:** Pilihan ukuran teks (Normal, Besar, Ekstra Besar) untuk kenyamanan pengguna berbagai usia.
   - **High Contrast:** Mode ketebalan teks (teks lebih tebal) untuk meningkatkan keterbacaan.
   - Preferensi otomatis tersimpan di peramban (`localStorage`).

4. **Navigasi & Layout Responsif**
   - **Desktop/Tablet:** Sidebar penuh di kiri.
   - **Mobile:** Sidebar otomatis berubah menjadi navigasi melayang (*Bottom Navigation Bar*) di bawah layar agar mudah diakses dengan satu tangan.
   - Konten tabel dan kartu menyesuaikan ukuran layar tanpa merusak tata letak.

5. **Sistem Pencarian & Tampilan Ganda**
   - Tampilan List (Minimal) untuk sekilas pandang.
   - Tampilan Tabel Detail (Detailed) untuk analisa lengkap (Budget, Variance, Shipyard).
   - Kolom *Search* interaktif dengan animasi fokus (melebar otomatis).

6. **Halaman Detail Dinamis (`/drydocks/[uuid]`)**
   - Manajemen Tab (Specifications, Sourcing, Costs, Reporting).
   - *Breadcrumb navigation* untuk kemudahan kembali.
   - Tampilan bersih untuk fokus pada satu proyek perbaikan kapal.

---

## 🛠️ Teknologi yang Digunakan
- **Framework:** Nuxt 3 (Vue.js) - Untuk performa SSR/SSG tinggi.
- **Styling:** Vanilla CSS 3 (Variabel CSS, Flexbox, Grid, CSS Transitions). Tidak ada *bloatware* CSS.
- **Ikonografi:** SVG langsung tersemat (*inline*).

---

## 🚀 Cara Menjalankan Secara Lokal (How to Run)

Pastikan komputer Anda sudah terinstal **Node.js** (versi 18+ disarankan).

1. Buka terminal di direktori proyek ini.
2. Instal dependensi:
   ```bash
   npm install
   ```
3. Jalankan server pengembangan lokal:
   ```bash
   npm run dev
   ```
4. Buka peramban (browser) di: `http://localhost:3000`

---

## 🌐 Cara Deploy ke GitHub Pages

Proyek ini sudah dilengkapi dengan konfigurasi **GitHub Actions** untuk *deployment* otomatis ke GitHub Pages.

**Langkah-langkahnya:**
1. Pastikan *repository* GitHub Anda bersifat **Public**.
2. Masuk ke tab **Settings** di repo GitHub Anda.
3. Di menu sebelah kiri, pilih **Pages**.
4. Di bagian *Build and deployment*, ubah *Source* menjadi **GitHub Actions**.
5. *Push* kode ke *branch* `main` atau `master`.
6. Proses *deploy* akan berjalan otomatis (bisa dicek di tab **Actions**).
7. Setelah selesai, website bisa diakses melalui URL: `https://[username-github].github.io/[nama-repo]/`

---

## 📸 Tangkapan Layar (Screenshot Bukti)

> **Catatan:** Anda dapat menangkap layar *(screenshot)* langsung dari browser (dengan `Windows + Shift + S` di Windows atau `Command + Shift + 4` di Mac), lalu menyisipkannya atau menyimpannya di folder `/public` untuk presentasi.

### 1. Animasi Awal (Splash Screen - Bright Glass)
![Splash Screen Placeholder](./public/splash-placeholder.png)
*Tampilan pembuka dengan ombak bergaya kaca buram yang bersih.*

### 2. Halaman Utama (Dashboard - Light Mode)
![Dashboard Light Placeholder](./public/dashboard-light.png)
*Menampilkan daftar kapal dan fitur filter.*

### 3. Halaman Utama (Dashboard - Dark Mode)
![Dashboard Dark Placeholder](./public/dashboard-dark.png)
*Tampilan elegan mode gelap untuk bekerja di malam hari.*

### 4. Menu Aksesibilitas
![Aksesibilitas Placeholder](./public/accessibility.png)
*Panel khusus di bagian atas untuk menyesuaikan ukuran dan ketebalan font (kontras).*
