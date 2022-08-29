
export class Modal {
    
    static showModalEdit() {

        const btnEdit = document.querySelectorAll(".editButton")
        const modal = document.getElementById("editModal")

        btnEdit.forEach((button) => {
            button.addEventListener("click", (event) => {
                console.log("oi");

                localStorage.setItem("@kenzieBlog:itemId", event.itemId)
                //localStorage.getItem("@kenzieBlog:itemId")

                modal.classList.toggle("hidden")
            })
        })
        console.log(btnEdit);
    }
    
    static closeModalEdit() {
        const btnEditClose = document.getElementById("closeBtnEdit")
        const modal = document.getElementById("editModal")

        btnEditClose.addEventListener("click", () => {
            modal.classList.add("hidden")
        })
    }

    static showModalDelete() {
        const btnDelete = document.querySelectorAll(".deleteButton")
        const modal = document.getElementById("deleteModal")

        btnDelete.forEach((button) => {
            button.addEventListener("click", (event) => {
                localStorage.setItem("@kenzieBlog:itemId", event.itemId)
                modal.classList.toggle("hidden")
            })
        })
    }
    
    static closeModalDelete() {
        const btnDeleteClose = document.getElementById("closeBtn")
        const modal = document.getElementById("deleteModal")

        btnDeleteClose.addEventListener("click", () => {
            modal.classList.add("hidden")
        })
    }
}