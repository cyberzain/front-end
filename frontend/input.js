

// // Function for user registration
// async function registerUser(data) {
//   const response = await fetch("http://localhost:5000/api/auth/register", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data)
//   });
//   return response.json();
// }

// // Function for user login
// async function loginUser(data) {
//   const response = await fetch("http://localhost:5000/api/auth/login", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data)
//   });
//   return response.json();
// }

// // Attach forms when the page loads
// document.addEventListener("DOMContentLoaded", () => {
//   // Register form
//   const registerForm = document.getElementById("registerForm");
//   if (registerForm) {
//     registerForm.addEventListener("submit", async (e) => {
//       e.preventDefault();
//       const data = {
//         email: document.getElementById("email").value,
//         password: document.getElementById("password").value,
//         confirmPassword: document.getElementById("confirmPassword").value
//       };
//       const result = await registerUser(data);
//       if (result.token) {
//         alert("Registration successful!");
//         window.location.href = "login.html"; // redirect after success
//       } else {
//         alert("Error: " + (result.message || "Registration failed"));
//       }
//     });
//   }

//   // Login form
//   const loginForm = document.getElementById("loginForm");
//   if (loginForm) {
//     loginForm.addEventListener("submit", async (e) => {
//       e.preventDefault();
//       const data = {
//         email: document.getElementById("email").value,
//         password: document.getElementById("password").value
//       };
//       const result = await loginUser(data);
//       if (result.token) {
//         localStorage.setItem("token", result.token);
//         alert("Login successful!");
//         window.location.href = "dashboard.html"; // redirect after success
//       } else {
//         alert("Error: " + (result.message || "Login failed"));
//       }
//     });
//   }
// });


// ================= REGISTER =================
async function registerUser(data) {
  const response = await fetch("http://localhost:5000/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return response.json();
}

// ================= LOGIN =================
async function loginUser(data) {
  const response = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return response.json();
}

document.addEventListener("DOMContentLoaded", () => {

  // ========= REGISTER =========
  const registerForm = document.getElementById("registerForm");

  if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      const result = await registerUser({ email, password });

      if (result.message === "User registered successfully") {
        alert("Registration successful!");
        window.location.href = "login.html";
      } else {
        alert(result.message || "Registration failed");
      }
    });
  }

  // ========= LOGIN =========
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const result = await loginUser({ email, password });

      if (result.message === "Login successful") {
        alert("Login successful!");

        // ✅ Save token
        localStorage.setItem("token", result.token);

        window.location.href = "interface.html";
      } else {
        alert(result.message || "Login failed");
      }
    });
  }

});
