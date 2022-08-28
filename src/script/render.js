export class Render {
    static renderPostList (arrPost) {
        const divPost = document.getElementsByClassName("Main--SectionPost--Post")[0]

        arrPost.data.forEach((post) => {
            const postCard = Render.creatPost(post)

            divPost.appendChild(postCard)
        })
    }

    static creatPost (post) {

        const d = new Date(post.createdAt);
        const dateFormatted = `${String(d.getDate())}/${d.getMonth < 10 ? String(d.getMonth()) : '0' +  String(d.getMonth())}/${String(d.getFullYear())}`
        
        let newDiv1 = document.createElement("div")
        let newDiv2 = document.createElement("div")
        let newDiv3 = document.createElement("div")
        let newDiv4 = document.createElement("div")
        let newImg  = document.createElement("img")
        let newH3   = document.createElement("h3")
        let newP1   = document.createElement("p")
        let newP2   = document.createElement("p")

        newDiv1.classList.add("Post")
        newDiv2.classList.add("img-name-text")
        newImg.src = post.user.avatarUrl
        newImg.alt = ("user image")
        newDiv3.classList.add("name-text")
        newH3.innerText = post.user.username
        newP1.id = ("mensagem")
        newP1.innerText = post.content
        newDiv4.classList.add("data-btn")
        newP2.innerText = dateFormatted;

        newDiv3.append(newH3, newP1)
        newDiv2.append(newImg, newDiv3)
        newDiv4.append(newP2)
        newDiv1.append(newDiv2, newDiv4)

        if (post.user.id == localStorage.getItem("@kenzieBlog:userId")) {
            let newDiv5 = document.createElement("div")
            let newBtn1 = document.createElement("button")
            let newBtn2 = document.createElement("button")
            let newImg2 = document.createElement("img")
            let newImg3 = document.createElement("img")

            newDiv5.id  = ("btn-edit-delet")
            newImg2.src = ("../edit.png")
            newImg3.src = ("../trash-bin 1.png")

            newBtn1.append(newImg2)
            newBtn2.append(newImg3)
            newDiv5.append(newBtn1, newBtn2)
            newDiv4.append(newDiv5)
        }

        return newDiv1
    }

}
