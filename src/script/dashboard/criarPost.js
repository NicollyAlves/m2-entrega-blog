import { Api } from "../api.js";
import { Render } from "../render.js";
import { renderizarPost } from "./listar.js";

export class Create {
    static createPost() {
        const postBtn = document.getElementById("buttonPost")
        const post = document.getElementById("text")
        postBtn.addEventListener("click", async (event) => {
            event.preventDefault()

            const data = {
                content: post.value
            }

            const newPost = await Api.newPost(data)
            console.log(newPost);

            Render.renderOwnPost(newPost)
        })
    }
}

Create.createPost()
