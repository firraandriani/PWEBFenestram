 function validateForm() {
    var email = document.getElementById('email');
    var pass1 = document.getElementById('pass1');

    if (!email.value) {
        alert("Email tidak boleh kosong");
        email.focus();
    }

    else if (!pass1.value) {
        alert("Password tidak boleh kosong");
        pass1.focus();
    }

    else {
        alert("Selamat Datang di Fenestram!!!");
        window.location.href = "../html/beranda.html";
    }
}