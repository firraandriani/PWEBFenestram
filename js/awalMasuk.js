 function validateForm() {
    var email = document.getElementById('email');
    var pass1 = document.getElementById('pass1'); 
    var pass2 = document.getElementById('pass2'); 

    if (!email.value) {
        alert("Email tidak boleh kosong");
        email.focus();
    }

    else if (!pass1.value) {
        alert("Password tidak boleh kosong");
        pass1.focus();
    }

    else if (!pass2.value) {
        alert("Confrim Password tidak boleh kosong");
        pass2.focus();
    }

    else if (pass1.value!=pass2.value) {
        alert("Password tidak sama");
    }

    else {
        alert("Lengkapi data diri terlebih dahulu");
        window.location.href = "html/Daftar 2.html";
    }
}