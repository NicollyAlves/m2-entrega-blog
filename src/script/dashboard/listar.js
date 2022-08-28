import { Api } from "../api.js";
import { Render } from "../render.js"

Api.login({email: "vitor@kenzie.com.br", username: "vitorhugo", password: "Teste123" })

async function renderizarPost () {
    const arrPost = await Api.getPostByPage()
    Render.renderPostList(arrPost)
}
//renderizarPost()
