const loginButton = document.getElementById("login-form-submit");
loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const loginForm = document.getElementById("login-form");
  const loginErrorMsgHolder = document.getElementById("login-error-msg-holder");
  const username = loginForm.username.value;
  const password = loginForm.password.vaue;

  if (username === "user" && password === "password") {
    alert("You have successfully logged in.")
    location.reload();
  } else {
    alert("Invalid username or password!");
    loginErrorMsgHolder.style.display = "block";
  }
}
