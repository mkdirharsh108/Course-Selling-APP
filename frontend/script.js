const BASE_URL = "http://localhost:3000";

async function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch(`${BASE_URL}/user/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  alert(data.message);
}

async function signin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch(`${BASE_URL}/user/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (data.token) {
    localStorage.setItem("token", data.token);
    window.location.href = "dashboard.html";
  } else {
    alert("Login failed");
  }
}

async function getCourses() {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}/user/courses`, {
    headers: {
      "Authorization": token,
    },
  });

  const data = await res.json();

  const list = document.getElementById("courses");
  list.innerHTML = "";

  data.courses.forEach(course => {
    const li = document.createElement("li");
    li.innerText = `${course.title} - ₹${course.price}`;
    list.appendChild(li);
  });
}

function logout() {
  localStorage.removeItem("token");
  window.location.href = "index.html";
}
