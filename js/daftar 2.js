 function validateForm() {
    var namaDep = document.getElementById('namaDep');
    var namaBel = document.getElementById('namaBel');

    if (!namaDep.value) {
        alert("Nama Depan tidak boleh kosong");
        namaDep.focus();
    }

    else if (!namaBel.value) {
        alert("Nama Belakang tidak boleh kosong");
        namaBel.focus();
    }

    else {
        alert("Selamat Datang di Fenestram!!!");
        window.location.href = "../html/beranda.html";
    }
}