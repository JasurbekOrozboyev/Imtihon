document.addEventListener("DOMContentLoaded", function () {
const profileImage = document.getElementById("profileImage");


profileImage.src = `https://i.pravatar.cc/150?`;

const fullname = localStorage.getItem("fullname");
const phone = localStorage.getItem("phone");
const age = localStorage.getItem("age");
const email = localStorage.getItem("email");

if (!fullname || !phone || !age || !email) {
    alert("Ma'lumot topilmadi!");
    window.location.href = "index.html";
    return;
}

document.getElementById("fullname").textContent = fullname;
document.getElementById("phone").textContent = phone;
document.getElementById("age").textContent = age;
document.getElementById("email").textContent = email;

document.getElementById("edit").addEventListener("click", function () {
    document.getElementById("editFullname").value = fullname;
    document.getElementById("editPhone").value = phone;
    document.getElementById("editAge").value = age;
    document.getElementById("editEmail").value = email;
    document.getElementById("editModal").classList.remove("hidden");
});

document.getElementById("saveEdit").addEventListener("click", function () {
    const newFullname = document.getElementById("editFullname").value;
    const newPhone = document.getElementById("editPhone").value;
    const newAge = document.getElementById("editAge").value;
    const newEmail = document.getElementById("editEmail").value;

    if (newFullname && newPhone && newAge && newEmail) {
        localStorage.setItem("fullname", newFullname);
        localStorage.setItem("phone", newPhone);
        localStorage.setItem("age", newAge);
        localStorage.setItem("email", newEmail);

        document.getElementById("fullname").textContent = newFullname;
        document.getElementById("phone").textContent = newPhone;
        document.getElementById("age").textContent = newAge;
        document.getElementById("email").textContent = newEmail;
    }
    document.getElementById("editModal").classList.add("hidden");
});
    
document.getElementById("closeModal").addEventListener("click", function(){
    document.getElementById("editModal").classList.add("hidden")
})

document.getElementById("deletebtn").addEventListener("click", function () {
    if (confirm("Rostdan o'chirasizmi?")) {
        localStorage.clear();
        window.location.href = "index.html";
    }
});

document.getElementById("profileRow").addEventListener("click", function () {
    window.location.href = "profile.html";
});

document.getElementById("logout").addEventListener("click", function () {
    localStorage.clear();
    window.location.href = "index.html";
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
});


document.addEventListener("DOMContentLoaded", loadUsers); 

document.getElementById("addUser").addEventListener("click", function () {
    const fullname = document.getElementById("newFullname").value.trim();
    const phone = document.getElementById("newPhone").value.trim();
    const age = document.getElementById("newAge").value.trim();
    const email = document.getElementById("newEmail").value.trim();

    if (!fullname || !phone || !age || !email) {
        alert("Maydonlarni to'ldiring!");
        return;
    }

    const user = { fullname, phone, age, email };
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    addUserToTable(user, users.length - 1);

    
    document.getElementById("newFullname").value = "";
    document.getElementById("newPhone").value = "";
    document.getElementById("newAge").value = "";
    document.getElementById("newEmail").value = "";
});


document.getElementById("profileRow").addEventListener("click", function () {
    window.location.href = "profile.html";
});

//qidiruv
document.getElementById("searchInput").addEventListener("keyup", function () {
    let filter = this.value.toLowerCase();
    let rows = document.querySelectorAll("#userTable tr");

    rows.forEach(row => {
        let text = row.textContent.toLowerCase();
        row.style.display = text.includes(filter) ? "" : "none";
    });
});


function loadUsers() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    document.getElementById("userTable").innerHTML = "";
    users.forEach((user, index) => addUserToTable(user, index));
}

function deleteRow(button) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const index = button.getAttribute("data-index");

    if (index !== null) {
        users.splice(index, 1); 
        localStorage.setItem("users", JSON.stringify(users));
        loadUsers(); 
    }
};

function addUserToTable(user, index) {
const table = document.getElementById("userTable");
const newRow = document.createElement("tr");

newRow.innerHTML = `
    <div class="flex justify-center items-center border-t">
        <img class="w-16 h-16 rounded-full mt-[10px]" src="https://i.pravatar.cc/150?u" alt="Profile Image">
    </div>
    <td class="border p-2 fullname">${user.fullname}</td>
    <td class="border p-2 phone">${user.phone}</td>
    <td class="border p-2 age">${user.age}</td>
    <td class="border p-2 email">${user.email}</td>
   <div class="flex justify-center items-center gap-1 pb-10 border-b">
   <button class="edit-btn px-2 py-1 border rounded hover:bg-[#FEAF00] hover:text-white" data-index="${index}">Tahrirlash</button>
   <button class="delete-btn px-2 py-1 border rounded hover:bg-[#FEAF00] hover:text-white" data-index="${index}">O'chirish</button>
   <button class="details-btn px-2 py-1 border rounded hover:bg-[#FEAF00] hover:text-white" data-index="${index}">Batafsil</button>
   </div>
    
`;

table.appendChild(newRow);

newRow.querySelector(".details-btn").addEventListener("click", function () {
    localStorage.setItem("selectedUser", JSON.stringify(user)); 
    window.location.href = "details.html"; 
});


newRow.querySelector(".delete-btn").addEventListener("click", function () {
    deleteRow(this);
});

newRow.querySelector(".edit-btn").addEventListener("click", function () {
    editRow(this);
});
}


function deleteRow(button) {
button.closest("tr").remove();
}

function editRow(button) {
let row = button.closest("tr");

let fullname = row.querySelector(".fullname").textContent;
let phone = row.querySelector(".phone").textContent;
let age = row.querySelector(".age").textContent;
let email = row.querySelector(".email").textContent;

row.innerHTML = `
    <div class="flex justify-center items-center ">
        <img class="w-16 h-16 rounded-full" src="https://i.pravatar.cc/150?u" alt="Profile Image">
    </div>
    <td class="border p-2"><input type="text" class="edit-fullname border p-1 w-full" value="${fullname}"></td>
    <td class="border p-2"><input type="text" class="edit-phone border p-1 w-full" value="${phone}"></td>
    <td class="border p-2"><input type="number" class="edit-age border p-1 w-full" value="${age}"></td>
    <td class="border p-2"><input type="email" class="edit-email border p-1 w-full" value="${email}" disabled></td>
    <div class="flex justify-center items-center gap-1 pb-10 border-b">
        <button class="save-btn px-2 py-1 border rounded hover:bg-[#FEAF00] hover:text-white">Saqlash</button>
        <button class="cancel-btn px-2 py-1 border rounded hover:bg-[#FEAF00] hover:text-white">Bekor qilish</button>
    </div>
`;

row.querySelector(".save-btn").addEventListener("click", function () {
    saveEdit(row);
});

row.querySelector(".cancel-btn").addEventListener("click", function () {
    cancelEdit(row, fullname, phone, age, email);
});
}

function saveEdit(row) {
let fullname = row.querySelector(".edit-fullname").value.trim();
let phone = row.querySelector(".edit-phone").value.trim();
let age = row.querySelector(".edit-age").value.trim();
let email = row.querySelector(".edit-email").value.trim();

row.innerHTML = `
    <div class="flex justify-center items-center ">
        <img class="w-16 h-16 rounded-full" src="https://i.pravatar.cc/150?u" alt="Profile Image">
    </div>
    <td class="border p-2 fullname">${fullname}</td>
    <td class="border p-2 phone">${phone}</td>
    <td class="border p-2 age">${age}</td>
    <td class="border p-2 email">${email}</td>
    <div class="flex justify-center items-center gap-1 pb-10 border-b">
        <button class="edit-btn px-2 py-1 border rounded hover:bg-[#FEAF00] hover:text-white">Tahrirlash</button>
        <button class="delete-btn px-2 py-1 border rounded hover:bg-[#FEAF00] hover:text-white">O'chirish</button>
    </div>
`;

row.querySelector(".edit-btn").addEventListener("click", function () {
    editRow(this);
});

row.querySelector(".delete-btn").addEventListener("click", function () {
    deleteRow(this);
});
}

function cancelEdit(row, fullname, phone, age, email) {
row.innerHTML = `
    <div class="flex justify-center items-center ">
        <img class="w-16 h-16 rounded-full" src="https://i.pravatar.cc/150?u" alt="Profile Image">
    </div>
    <td class="border p-2 fullname">${fullname}</td>
    <td class="border p-2 phone">${phone}</td>
    <td class="border p-2 age">${age}</td>
    <td class="border p-2 email">${email}</td>
    <div class="flex justify-center items-center gap-1 pb-10 border-b">
        <button class="edit-btn px-2 py-1 border rounded hover:bg-[#FEAF00] hover:text-white">Tahrirlash</button>
        <button class="delete-btn px-2 py-1 border rounded hover:bg-[#FEAF00] hover:text-white">O'chirish</button>
    </div>
`;

row.querySelector(".edit-btn").addEventListener("click", function () {
    editRow(this);
});

row.querySelector(".delete-btn").addEventListener("click", function () {
    deleteRow(this);
});

}

