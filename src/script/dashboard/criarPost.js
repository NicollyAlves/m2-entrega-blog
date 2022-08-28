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

            await Api.newPost(data)
            const posts = await Api.getPostByPage()
            console.log(posts)
        })
    }
}

Create.createPost()
