document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("loginForm");
  
  const message = document.getElementById("message");

  if (sessionStorage.getItem("loggedIn") === "true") {
    loginForm.classList.add("hidden"); 
    document.getElementById("inventorySection").classList.remove("hidden"); 
  }

  loginForm.addEventListener("submit", function(event) {

      const email = loginForm.email.value;
      const password = loginForm.password.value;

      const correctEmail = "shaun19862010@hotmail.co.uk";
      const correctPassword = "shaun";

      if (email === correctEmail && password === correctPassword) {
          loginForm.classList.add("hidden"); 
          document.getElementById("inventorySection").classList.remove("hidden"); 
          sessionStorage.setItem("loggedIn", "true"); 
      } else {
          message.textContent = "Incorrect email or password.";
      }
  });

  const logoutButton = document.querySelector(".js-logout-button");
  logoutButton.addEventListener("click", function() {
      sessionStorage.removeItem("loggedIn");
      loginForm.classList.remove("hidden"); 
      document.getElementById("inventorySection").classList.add("hidden");
  });
});