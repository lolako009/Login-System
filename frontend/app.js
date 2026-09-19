// const API_URL = "http://localhost:5000";
const API_URL = "https://login-system-api-9tf3.onrender.com";

async function register() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch(`${API_URL}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();

    document.getElementById("message").innerText =
      data.message || "Registration complete";
  } catch (error) {
    document.getElementById("message").innerText = "Cannot connect to server";
  }
}

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch(`${API_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      window.location.href = "dashboard.html";
    } else {
      document.getElementById("message").innerText =
        data.message || "Login failed";
    }
  } catch (error) {
    document.getElementById("message").innerText = "Cannot connect to server";
  }
}
