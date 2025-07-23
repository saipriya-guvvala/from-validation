document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting

  // Clear previous error messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  let isValid = true;

  // Name validation
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email format.";
    isValid = false;
  }

  // Password validation
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    isValid = false;
  }

  // Final check
  if (isValid) {
    alert("Form submitted successfully!");
    // You can submit the form using AJAX or reset it here
    document.getElementById("registrationForm").reset();
  }
});
