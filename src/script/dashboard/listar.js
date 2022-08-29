import { Api } from "../api.js";
import { Render } from "../render.js"


export async function renderizarPost () {
    const arrPost = await Api.getPostByPage()
    Render.renderPostList(arrPost)
}
renderizarPost()

export async function renderizarOwnPost () {
    const arrPost = await Api.newPost()
    Render.renderOwnPost(arrPost)
}
renderizarOwnPost()

async function getUser () {
    const user = await Api.getUser()
    Render.creatUserInf(user)
}
getUser()

