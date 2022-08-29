import { Api } from "../api.js";
import { Modal } from "../modals/modals.js";
import { Render } from "../render.js";

export class Delete {
    
    static deletePost() { 

    const updateBtn = document.getElementById("submitDeletar")
    const modal = document.querySelector("#deleteModal")

    updateBtn.addEventListener("click", async (event) => {
        console.log("oi")

        event.preventDefault()
        const itemId = localStorage.getItem("@kenzieBlog:itemId")

        await Api.deletePost(itemId)
        modal.classList.add("hidden")
        localStorage.removeItem("@kenzieBlog:itemId")


        const posts = await Api.getPostByPage()
        Render.renderOwnPost(posts)
        //console.log(newPost);

        //Render.renderOwnPost(newPost)

        Modal.showModalDelete()
        Modal.closeModalDelete()
    })
}
}
Modal.showModalDelete()
Modal.closeModalDelete()
Delete.deletePost()