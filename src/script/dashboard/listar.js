import { Api } from "../api.js";
import { Render } from "../render.js"

<<<<<<< HEAD

export async function renderizarPost () {
    const arrPost = await Api.getPostByPage()
    Render.renderPostList(arrPost)
}
await renderizarPost()


/*export class RenderizarPost {
    static renderiza() {
        const arrPost = Api.getPostByPage()
        Render.renderPostList(arrPost)
    }
}
RenderizarPost.renderiza()*/
=======
async function renderizarPost () {
    const arrPost = await Api.getPostByPage()
    Render.renderPostList(arrPost)
}
renderizarPost()

async function getUser () {
    const user = await Api.getUser()
    Render.creatUserInf(user)
}
getUser()
>>>>>>> origin/develop
