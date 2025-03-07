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
document.addEventListener("DOMContentLoaded", function () {
const user = JSON.parse(localStorage.getItem("selectedUser"));
if (!user) {
document.getElementById("userDetails").innerHTML = "<tr><td colspan='2'>Ma'lumot topilmadi</td></tr>";

return;
}

document.getElementById("userDetails").innerHTML = `
    <p class="text-gray-500 text-sm">Name</p>
        <p class="text-lg font-semibold">${user.fullname}</p>

        <p class="text-gray-500 text-sm mt-2">Email</p>
        <p class="text-md font-medium">${user.email}</p>

        <p class="text-gray-500 text-sm mt-2">Phone</p>
        <p class="text-md font-medium">${user.phone}</p>
        `;
document.getElementById("nameFull").textContent = user.fullname;
    

});
document.getElementById("logout").addEventListener("click", function () {
    localStorage.clear();
    window.location.href = "index.html";
});
document.getElementById("back").addEventListener("click", function() {
    window.location.href = "blogs.html";
});