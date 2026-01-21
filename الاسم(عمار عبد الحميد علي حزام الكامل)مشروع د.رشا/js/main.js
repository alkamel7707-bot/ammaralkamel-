// Slider Logic
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (slides.length === 0) return;
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}

// Auto Slide
setInterval(() => {
    plusSlides(1);
}, 5000);

// Auth Tab Switching
function showAuth(type) {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const tabs = document.querySelectorAll('.tab-btn');

    if (type === 'login') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        tabs[0].classList.add('active');
        tabs[1].classList.remove('active');
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        tabs[0].classList.remove('active');
        tabs[1].classList.add('active');
    }
}

// Validation Logic
function validateLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const pass = document.getElementById('login-pass').value;

    if (email && pass) {
        showToast("تم تسجيل الدخول بنجاح!", "success");
    } else {
        showToast("يرجى ملء جميع الحقول", "error");
    }
    return false;
}

function validateSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const pass = document.getElementById('signup-pass').value;
    const confirm = document.getElementById('signup-confirm').value;

    if (pass !== confirm) {
        showToast("كلمات المرور غير متطابقة!", "error");
        return false;
    }

    if (name && email && pass) {
        showToast("تم إنشاء الحساب بنجاح!", "success");
    }
    return false;
}

// Helper function for Toast
function showToast(message, type) {
    let bgColor = "linear-gradient(to right, #00b09b, #96c93d)";
    if (type === "error") {
        bgColor = "linear-gradient(to right, #ff5f6d, #ffc371)";
    }

    if (typeof Toastify === "function") {
        Toastify({
            text: message,
            duration: 3000,
            gravity: "top",
            position: "center",
            backgroundColor: bgColor,
        }).showToast();
    } else {
        alert(message);
    }
}
