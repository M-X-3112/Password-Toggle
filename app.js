let password = document.getElementById("password")
let hide = document.getElementById("hide")

hide.onclick = function() {
    if(password.type == "password") {
        password.type = "text"
        hide.innerHTML = `<i class="fa-solid fa-eye"></i>`} 
    else {
        password.type = "password"
        hide.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`}
}