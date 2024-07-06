const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelector(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"))
formCloseBtn.addEventListener("click", () => home.classList.remove("show"))

let check = false 
pwShowHide.addEventListener("click", () => {



     
    if(check === false) {
        document.querySelector("#password").type = "text";
        pwShowHide.classList.replace("uil-eye-slash", "uil-eye");
        check = true
    } else {
        check = false 
        document.querySelector("#password").type = "password";
        pwShowHide.classList.replace("uil-eye", "uil-eye-slash")
    }
})





signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
})

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active")
})