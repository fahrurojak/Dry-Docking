<div align="center">
  <h1>🚢 Dry Docking Management System</h1>
  <p><strong>A Modern, High-Performance Web Application for Managing Dry Docking Operations.</strong></p>
  
  [![Nuxt](https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxt.js&logoColor=green)](https://nuxt.com/)
  [![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)](https://vuejs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
</div>

<br/>

## 📖 Deskripsi Proyek (FRD)

**Dry Docking Management System** adalah proyek implementasi aplikasi manajemen perbaikan kapal. 

**Catatan Penting:** Proyek ini harus mengutamakan **struktur, algoritma, dan *syntax* yang *clean***. **Desain visual bukanlah fokus utama**, melainkan kualitas penulisan kode di belakang layar.

Tiga pilar utama dalam pengembangan proyek ini:
1. **Clean Structure:** Struktur kode yang memisahkan tampilan dan logika dengan sangat tegas. Semua hitung-hitungan dan filter data diletakkan terpusat di belakang layar (*Composables*), sehingga komponen UI/tampilan menjadi sangat ringan dan rapi.
2. **High Performance Algorithm:** Algoritma pencarian yang dirancang agar sangat cepat dan hemat memori. Sistem dapat melakukan filter kategori sekaligus mencocokkan kata kunci pencarian dalam satu kali jalan, tanpa perlu mengolah data berulang-ulang.
3. **Clean Syntax:** Penulisan kode TypeScript yang disiplin dan aman. Sama sekali menghindari jalan pintas seperti tipe `any`, dan sepenuhnya menggunakan tipe data spesifik yang ketat agar aplikasi terhindar dari *error* tersembunyi.

---

## ✨ Fitur Utama

- **Antarmuka Modern (Modern Interface)**  
  Animasi *splash screen* pembuka bergaya ombak kaca transparan. Mengadopsi tata letak cerdas yang responsif, termasuk navigasi apung khusus untuk perangkat seluler.

- **Tema Terang & Gelap (Adaptive Theme)**  
  Transisi tema yang sangat halus. Seluruh elemen tabel, kartu, dan formulir otomatis beradaptasi dengan mode gelap (*dark mode*) untuk kenyamanan mata.

- **Dukungan Aksesibilitas (Accessibility)**  
  Menu khusus yang memungkinkan pengguna mengubah ukuran teks secara global serta mengaktifkan mode kontras tinggi agar lebih mudah dibaca.

- **Manajemen Data Ganda (Dual-View Data)**  
  Daftar kapal dapat dilihat dalam dua format: *Grid Minimalis* (berbasis kartu) dan *Tabel Detail* (lengkap dengan data anggaran). Dilengkapi fitur penyaringan status dan pencarian cepat.

- **Dasbor Spesifik Kapal (Ship Dashboard)**  
  Halaman manajemen komprehensif untuk setiap kapal. Menggunakan sistem *Multi-Tab* untuk mengelola Spesifikasi, Pelaksanaan, Laporan, hingga Estimasi Biaya.

---

## 🛠️ Teknologi & Ekosistem (Tech Stack)

> *Dibangun dari bawah ke atas tanpa framework CSS eksternal (seperti Tailwind/Bootstrap) untuk mendemonstrasikan penguasaan dasar (fundamentals) CSS dan JavaScript yang kuat.*

- **Core Framework:** Nuxt 3 (Vue.js 3, Composition API)
- **Bahasa Pemrograman:** TypeScript (*Strict Typing*)
- **Styling:** Vanilla CSS 3 (*CSS Custom Properties, Flexbox, Grid*)
- **Backend / API:** Nuxt Nitro Server (`/server/api/`) terintegrasi.
- **Database Lokal:** File-based JSON Database (`data/drydocks.json`).
- **Toleransi Kegagalan (GitHub Pages Fallback):** Sistem cerdas yang mendeteksi lingkungan *Static Hosting*. Jika koneksi API backend gagal, aplikasi akan secara otomatis mengalihkan sumber data ke **Mock Data** klien sehingga aplikasi tetap 100% fungsional untuk keperluan demonstrasi/portfolio.

---

## 📂 Struktur Proyek (Architecture)

Struktur *codebase* disusun sangat modular dengan prinsip *Separation of Concerns* untuk mempermudah pengembangan berskala besar (*Enterprise-ready*).

```text
📦 Dry-Docking
 ┣ 📂 assets          # Aset statis (Gambar dokumentasi, CSS Global)
 ┣ 📂 components      # Komponen Vue presentasional (Reusable UI)
 ┃ ┣ 📂 drydock       # Komponen khusus fitur perbaikan (Cards, Tables, Tabs)
 ┃ ┗ 📂 ui            # Komponen dasar antarmuka
 ┣ 📂 composables     # Logika bisnis & State Management terpusat
 ┃ ┣ 📜 useDryDock.ts # Manajemen status untuk satu entitas kapal
 ┃ ┗ 📜 useDrydocks.ts# Algoritma array, filter, dan list utama
 ┣ 📂 data            # Penyimpanan JSON lokal pengganti Database SQL
 ┣ 📂 pages           # Sistem File-based Routing bawaan Nuxt
 ┃ ┣ 📂 drydocks      # Halaman daftar (index) & Detail dinamis ([uuid])
 ┣ 📂 server          # Lingkungan Backend Nuxt Nitro (REST API internal)
 ┣ 📂 types           # Definisi tipe (Interface) ketat TypeScript
 ┗ 📜 app.vue         # Titik masuk utama aplikasi (Root layout & Splash screen)
```

---

## 🚀 Panduan Instalasi (Lokal)

Pastikan komputer Anda telah terinstal **Node.js** (versi 18 atau lebih baru).

```bash
# 1. Buka direktori repositori di terminal
cd Dry-Docking

# 2. Instal semua dependensi wajib
npm install

# 3. Jalankan server pengembangan
npm run dev
```
Setelah server menyala, buka peramban dan kunjungi **`http://localhost:3000`**.

---

## 🌐 Deployment (GitHub Pages)

Repositori ini telah disetel untuk mendukung *deployment* otomatis secara instan.

1. Buka repositori Anda di GitHub lalu masuk ke menu **Settings**.
2. Klik tab **Pages** di sebelah kiri.
3. Pada bagian *Build and deployment*, ubah menu *Source* menjadi **GitHub Actions**.
4. Setiap kali Anda melakukan `git push` ke *branch* `main`, sistem akan otomatis merakit dan mempublikasikan versi terbaru situs web Anda.

---

## 📸 Tangkapan Layar Aplikasi

> **Catatan:** Gambarnya disimpan di `assets/images/` agar otomatis muncul di bawah ini.

<div align="center">

### 1. Halaman Utama (Dashboard)
![Dashboard Utama](./assets/images/1.jpg)
<br/>*Menampilkan antarmuka utama aplikasi saat diakses, lengkap dengan papan pantau My Dry Docks.*

<br/><hr width="50%"/><br/>

### 2. Detail All Dry Docks
![All Dry Docks](./assets/images/2.jpg)
<br/>*Menampilkan daftar seluruh kapal dalam mode tabel lengkap dengan utilitas penyaringan (*filter*) dan pencarian interaktif.*

<br/><hr width="50%"/><br/>

### 3. Detail Kapal Spesifik
![Detail Kapal](./assets/images/3.jpg)
<br/>*Menampilkan halaman komprehensif manajemen perbaikan untuk satu kapal beserta ringkasan anggaran, tugas, dan spesifikasi tab.*

</div>
