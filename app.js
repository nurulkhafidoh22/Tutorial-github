// Fungsi untuk memuat halaman utama (Beranda)
function loadHome() {
    document.getElementById('content').innerHTML = `
        <h1>Selamat Datang di Kelompok Pemrograman Perangkat Bergerak</h1>
        <div class="social-icons">
            <a href="https://www.instagram.com/stmik_tegal?igsh=MxhuaWx4M2w4ODk2/" target="_blank">
                <img class="social-icon" src="images/instagram-icon.png" alt="Instagram">
            </a>
            <a href="https://www.youtube.com/stmik.ymi" target="_blank">
                <img class="social-icon" src="images/youtube-icon.png" alt="YouTube">
            </a>
        </div>
    `;
}

// Fungsi untuk memuat daftar anggota 
function loadMembersList() {
    document.getElementById('content').innerHTML = `
        <h1>Daftar Anggota</h1>
        <div class="member-card" onclick="loadMember('nurul-khafidoh')">Nurul Khafidoh</div>
        <div class="member-card" onclick="loadMember('alivia-fatah-yumna')">Alivia Fatah Yumna</div>
        <div class="member-card" onclick="loadMember('rachma-fadilah-kurnianto')">Rachma Fadilah Kurnianto</div>
        <div class="member-card" onclick="loadMember('mufida-anggradita')">Mufida Anggradita</div>
        <div class="member-card" onclick="loadMember('nur-hidayah')">Nur Hidayah</div>
        <div class="member-card" onclick="loadMember('peni-nurul-fauzah')">Peni Nurul Fauzah</div>
    `;
}

//Fungsi untuk memuat detail anggota berdasarkan ID
function loadMember(memberId) {
    let memberDetails = {
        "nurul-khafidoh": `
            <h1>Nurul Khafidoh</h1>
            <p>Tempat, Tanggal Lahir: Tegal, 22 April 2004</p>
            <p>Jenis Kelamin: Perempuan</p>
            <p>NIM: 22166012</p>
            <p>Program Studi: Sistem Informasi</p>
            <p>Kewarganegaraan: Indonesia</p>
            <button onclick="loadMembersList()">Kembali ke Daftar Anggota</button>
        `,
        "alivia-fatah-yumna": `
            <h1>Alivia Fatah Yumna</h1>
            <p>Tempat, Tanggal Lahir: Pemalang, 2 Agustus 2004</p>
            <p>Jenis Kelamin: Perempuan</p>
            <p>NIM: 22166016</p>
            <p>Program Studi: Sistem Informasi</p>
            <p>Kewarganegaraan: Indonesia</p>
            <button onclick="loadMembersList()">Kembali ke Daftar Anggota</button>
        `,
        "rachma-fadilah-kurnianto": `
            <h1>Rachma Fadilah Kurnianto</h1>
            <p>Tempat, Tanggal Lahir: Tegal, 5 April 2001</p>
            <p>Jenis Kelamin: Perempuan</p>
            <p>NIM: 22166019</p>
            <p>Program Studi: Sistem Informasi</p>
            <p>Kewarganegaraan: Indonesia</p>
            <button onclick="loadMembersList()">Kembali ke Daftar Anggota</button>
        `,
        "mufida-anggradita": `
            <h1>Mufida Anggradita</h1>
            <p>Tempat, Tanggal Lahir: Tegal, 12 April 2001</p>
            <p>Jenis Kelamin: Perempuan</p>
            <p>NIM: 22166011</p>
            <p>Program Studi: Sistem Informasi</p>
            <p>Kewarganegaraan: Indonesia</p>
            <button onclick="loadMembersList()">Kembali ke Daftar Anggota</button>
        `,
        "nur-hidayah": `
            <h1>Nur Hidayah</h1>
            <p>Tempat, Tanggal Lahir: Tegal, 15 Mei 2001</p>
            <p>Jenis Kelamin: Perempuan</p>
            <p>NIM: 22166025</p>
            <p>Program Studi: Sistem Informasi</p>
            <p>Kewarganegaraan: Indonesia</p>
            <button onclick="loadMembersList()">Kembali ke Daftar Anggota</button>
        `,
        "peni-nurul-fauzah": `
            <h1>Peni Nurul Fauzah</h1>
            <p>Tempat, Tanggal Lahir: Tegal, 20 Juni 2001</p>
            <p>Jenis Kelamin: Perempuan</p>
            <p>NIM: 22166012</p>
            <p>Program Studi: Sistem Informasi</p>
            <p>Kewarganegaraan: Indonesia</p>
            <button onclick="loadMembersList()">Kembali ke Daftar Anggota</button>
        `,  
    };

    document.getElementById('content').innerHTML = memberDetails[memberId];
}

// Fungsi untuk memuat halaman tentang kami
function loadAbout() {
    document.getElementById('content').innerHTML = `
        <h1>Tentang Kami</h1>
        <img src="images/image-header.png" alt="Header Image" style="width: 80%; border-radius: 10px; margin-bottom: 20px;">
        <p>Tujuan kami adalah untuk belajar dan berkolaborasi dalam mengembangkan aplikasi berbasis web dan perangkat bergerak.</p>
        <p>Kami berkomitmen untuk meningkatkankemampuan pemrograman kami melalui proyek bersama dan kegiatan-kegintan yang mendukung.</p>
        <p>Halaman ini berisi informasi untuk memperkenalkan tiap anggota kelompok yang sedang mempelajari PWA (Progressive Web App) dalam mata</p>
        <p>Pemrograman Perangkat Bergerak. Kami adalah mahasiswa Sistem Informasi yang berkomitmen untuk belajar dan berkolaborasi dalam pengembangan</p>
        <p>Aplikasi berbasis web dan perangkat bergerak.</p>
        <h2>Motto Kami</h2>
        <blockquote style="font-style: italic; color: #333; border-left: 4px solid #001f3f; padding-left: 10px; margin: 20px auto; max-width: 600px;">
            "Belajar dan Berkembang Bersama untuk Masa Depan yang Lebih Baik"
        </blockquote>
        <button onclick="loadHome()">Kembali ke Beranda</button>
    `;
}