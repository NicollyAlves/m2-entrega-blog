import { Api } from "../api.js";
import { Modal } from "../modals/modals.js";

class Edit {
    
    static updatePost() {
        const updateBtn = document.getElementById("submitEditar")
        const modal = document.querySelector("#editModal")
        const postEditDescription = document.getElementById("editar")

        updateBtn.addEventListener("click", async (event) => {
            event.preventDefault()
            const updateIdPost = localStorage.getItem("@kenzieBlog:itemId")

            const data = {
                content: postEditDescription.value
            }

            await Api.updatePost(data, updateIdPost)
            modal.classList.add("hidden")
            localStorage.removeItem("@kenzieBlog:itemId")

            const post = await Api.getPostByPage()
            //COLOCAR MÉTODO QUE RENDERIZA NOSSO POST
            Modal.showModalEdit()
            Modal.closeModalEdit()
        })
    }
} 

Modal.showModalEdit()
Modal.closeModalEdit()
Edit.updatePost()

