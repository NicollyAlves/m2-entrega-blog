import { Api } from "./api.js"

class SignUp {

    static createUser() {
        const name      = document.getElementById("name")
        const email     = document.getElementById("email")
        const imagem    = document.getElementById("picture")
        const pass      = document.getElementById("password")
        const btnSignUp = document.getElementById("btnSignUp")

        btnSignUp.addEventListener("click", async (event) => {
            event.preventDefault()

            const data = {
                username:  name.value,
                email:     email.value,
                avatarUrl: imagem.value,
                password:  pass.value
            }

            await Api.createUser(data)
        })
    }

    static login() {
        const token  = localStorage.getItem("@kenzieBlog:token")
        const userId = localStorage.getItem("@kenzieBlog:userId")

        if(token && userId) {
            window.location.assign("../../src/HTML/homePage.html")
        }

        const emailLogin = document.getElementById("emailLogin")
        const passLogin  = document.getElementById("passwordLogin")
        const btnLogin   = document.getElementById("btnLogin")

        btnLogin.addEventListener("click", (event) => {
            event.preventDefault()

            const data = {
                email:    emailLogin.value,
                password: passLogin.value
            }
            console.log(data);
            console.log(data.password);

            Api.loginUser(data)
        })
    }
}

SignUp.createUser()
SignUp.login()