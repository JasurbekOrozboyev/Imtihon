document.addEventListener("DOMContentLoaded", function() {
    const fullname = localStorage.getItem("fullname");
    const phone = localStorage.getItem("phone");
    const age = localStorage.getItem("age");
    const email = localStorage.getItem("email");
    
    if (!fullname || !phone || !age || !email) {
        alert("Profil ma'lumotlari topilmadi!");
        window.location.href = "index.html";
        return;
    }
    
    document.getElementById("fullname").textContent = fullname;
    document.getElementById("phone").textContent = "Telefon: " + phone;
    document.getElementById("age").textContent = "Yosh: " + age;
    document.getElementById("email").textContent = "Email: " + email;
});

document.getElementById("back").addEventListener("click", function() {
    window.location.href = "blogs.html";
});


const toggleBtn = document.getElementById("toggleBtn");
const leftDiv = document.getElementById("leftDiv");
let isVisible = true; 

toggleBtn.addEventListener("click", function () {
    if (isVisible) {
        leftDiv.classList.add("hidden"); 
        toggleBtn.style.left = "2%"; 
    } else {
        leftDiv.classList.remove("hidden"); 
        toggleBtn.style.left = "34%"; 
    }
    isVisible = !isVisible; 
});