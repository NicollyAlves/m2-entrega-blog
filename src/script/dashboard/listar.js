import { Api } from "../api.js";
import { Render } from "../render.js"


async function renderizarPost () {
    const arrPost = await Api.getPostByPage()
    Render.renderPostList(arrPost)
}
renderizarPost()
