# ♻️ **Sortify** – *Sort & Verify*  

📌 **Senior Project TI**  
🏛 **Departemen Teknologi Elektro dan Teknologi Informasi, Fakultas Teknik, Universitas Gadjah Mada**  

---

## 👥 **Tim Pengembang**  

**Ketua Kelompok:**  
- Brandon Rafael Lovelyno *(22/500359/TK/54847)*  

**Anggota:**  
- Yodha Raya Nayaala *(22/498215/TK/54641)*  
- Muhammad Budi Setiawan *(22/505064/TK5524)*  

Repository lain:
1. `https://github.com/BrandonRafaelLovelyno/sortify-be`
2. `https://github.com/mbudis23/waste-classification-api`
---

## 🌍 **Latar Belakang**  

Sampah menjadi permasalahan mendesak di Yogyakarta dengan **270.153 ton sampah** masuk ke TPA setiap tahun, menandakan sistem pengelolaan yang belum efektif. Saat ini, lebih dari **90% sampah berakhir di TPA**, akibat rendahnya tingkat pemilahan dan daur ulang, yang mempercepat krisis lingkungan.  

📊 **Fakta tentang Pengelolaan Sampah di Yogyakarta:**  
✅ **Hanya 1,2% rumah tangga** yang mendaur ulang sampah.  
🔥 **66,8% rumah tangga** lebih memilih membakar sampah, berisiko mencemari udara dan membahayakan kesehatan.  

🔴 **Permasalahan ini membutuhkan solusi konkret** berupa peningkatan kesadaran masyarakat, penerapan sistem pemilahan sejak dari sumber, serta optimalisasi pengelolaan sampah untuk menciptakan lingkungan yang lebih bersih dan berkelanjutan.  

---

## 💡 **Ide & Solusi – Sortify**  

**Sortify** hadir sebagai solusi berbasis **Computer Vision** untuk mengidentifikasi dan mengklasifikasikan sampah ke dalam **5 kategori**, sesuai dengan sistem pengelolaan sampah di Jerman:  

♻️ **Organik** – Sisa makanan, daun, dan bahan yang bisa terurai alami.  
📄 **Kertas** – Kardus, majalah, dan produk berbasis kertas lainnya.  
🛍 **Plastik** – Botol plastik, kemasan, dan sampah berbahan plastik.  
🍾 **Kaca** – Botol dan pecahan kaca.  
🛠 **Logam** – Kaleng dan barang berbahan dasar logam.  

🔍 Dengan teknologi ini, Sortify dapat membantu masyarakat **lebih mudah memilah sampah**, mengurangi jumlah sampah yang masuk ke TPA, serta meningkatkan efisiensi **daur ulang dan keberlanjutan lingkungan**.  

---

## 🗂️ **Use Case Diagram**  

![WhatsApp Image 2025-02-20 at 22 27 08](https://github.com/user-attachments/assets/23c76db2-9311-4468-bc2c-163d08cd76ba)

---

## 🔗 **Entity Relationship Diagrams**  

![WhatsApp Image 2025-02-20 at 22 27 07](https://github.com/user-attachments/assets/3982c8a8-96a6-4665-a798-d324d30b9433)

## 🛠️ Instalasi menggunakan github
Ikuti langkah-langkah di bawah ini untuk menjalankan Sortify secara lokal.
1. Clone Repository
   ```bash
   git clone [https://github.com/yodharaya/sortify](https://github.com/yodharaya/sortify)
   cd sortify
   ```
2. Install Dependecties
   ```bash
   npm install
   ```
3. Konfigurasi Environment
   ```bash
    NEXT_PUBLIC_PRODUCTION_URL=https://api.waste.my.id
    NEXT_PUBLIC_DEVELOPMENT_URL=localhost:5000
    INTERNAL_API_URL=https://api.waste.my.id
    NEXT_PUBLIC_API_URL=https://api.waste.my.id
   ```
4. Menjalankan dalam mode developement
   ```bash
   npm run dev
   ```

beberapa berintah lain yaitu:
```bash
npm run dev
npm run build
npm start
npm run linkt
```

## 🛠️ Instalasi menggunakan docker
```bash
docker build -t sortify-app .
docker run -p 3000:3000 --env-file .env sortify-app
```

