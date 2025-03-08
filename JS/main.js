const form = document.getElementById("auth-form");
const formTitle = document.getElementById("form-title");
const toggleForm = document.getElementById("toggle-form");
let isSignUp = true;

toggleForm.addEventListener("click", function() {
    isSignUp = !isSignUp;
    if (isSignUp) {
        formTitle.textContent = "Sign Up";
        toggleForm.textContent = "Kirish";
        document.getElementById("fullname").style.display = "block";
        document.getElementById("phone").style.display = "block";
        document.getElementById("age").style.display = "block";
    } else {
        formTitle.textContent = "Admin Students";
        toggleForm.textContent = "Back";
        document.getElementById("fullname").style.display = "none";
        document.getElementById("phone").style.display = "none";
        document.getElementById("age").style.display = "none";
    }
});

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (isSignUp) {
        const fullname = document.getElementById("fullname").value;
        const phone = document.getElementById("phone").value;
        const age = document.getElementById("age").value;
        localStorage.setItem("fullname", fullname);
        localStorage.setItem("phone", phone);
        localStorage.setItem("age", age);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        window.location.href = "blogs.html";
    } else {
        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");
        
        if (email === storedEmail && password === storedPassword) {
            window.location.href = "blogs.html";
            
        } else {
            alert("Email yoki parol xato!");
        }
    }
});