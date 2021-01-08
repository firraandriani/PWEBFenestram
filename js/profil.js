function popupToggle(){
	var popup = document.querySelector('.popup');
	popup.classList.toggle('active')
}
function validasi(){
    if (document.forms["profil"]["nis"].value == "") {
        alert("NIS/NIM/NIP tidak boleh kosong");
        document.forms["profil"]["nis"].focus();
        return false;
    }

    if (document.forms["profil"]["namaLengkap"].value == "") {
        alert("Nama Lengkap tidak boleh kosong");
        document.forms["profil"]["namaLengkap"].focus();
        return false;
    }

    if (document.forms["profil"]["tempatLahir"].selectedIndex < 1) {
        alert("Pilih Tempat Lahir");
        document.forms["profil"]["tempatLahir"].focus();
        return false;
    }

    // if (document.forms["profil"]["tanggal"].value == "") {
    //     alert("Tanggal Lahir tidak boleh kosong");
    //     document.forms["profil"]["tanggal"].focus();
    //     return false;
    // }

    if (document.forms["profil"]["email"].value == "") {
        alert("Alamat Email tidak boleh kosong");
        document.forms["profil"]["email"].focus();
        return false;
    }

    function check_radio(radio) {
    // memeriksa apakah radio button sudah ada yang dipilih
        for (i = 0; i < radio.length; i++) {
            if (radio[i].checked === true) {
                return radio[i].value;
            }
        }
        return false;
    }
    
    var radio_val = check_radio(document.forms["profil"]["JenisKelamin"]);
    if (radio_val === false) {
        alert("Pilih Jenis Kelamin");
        return false;
    }

    if (document.forms["profil"]["jenisAnggota"].selectedIndex < 1) {
        alert("Pilih Jenis Anggota");
        document.forms["profil"]["jenisAnggota"].focus();
        return false;
    }

    if (document.forms["profil"]["kerja"].selectedIndex < 1) {
        alert("Pilih Pekerjaan");
        document.forms["profil"]["kerja"].focus();
        return false;
    }

    if (document.forms["profil"]["alamatTinggal"].value == "") {
        alert("Alamat Tinggal tidak boleh kosong");
        document.forms["profil"]["alamatTinggal"].focus();
        return false;
    }

    if (document.forms["profil"]["kotaTinggal"].selectedIndex < 1) {
        alert("Kota Tinggal tidak boleh kosong");
        document.forms["profil"]["kotaTinggal"].focus();
        return false;
    }

    if (document.forms["profil"]["provinsi"].selectedIndex < 1) {
        alert("Provinsi Tinggal tidak boleh kosong");
        document.forms["profil"]["provinsi"].focus();
        return false;
    }

    if (document.forms["profil"]["namaInstitusi"].value == "") {
        alert("Nama Institusi tidak boleh kosong");
        document.forms["profil"]["namaInstitusi"].focus();
        return false;
    }

    if (document.forms["profil"]["kelas"].value == "") {
        alert("Kelas/Semester tidak boleh kosong");
        document.forms["profil"]["kelas"].focus();
        return false;
    }

    else {
        alert("Terimakasih!");
        window.location.href = "../html/beranda.html";
    }
}