import { Api } from "../api.js";
import { Render } from "../render.js"


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
