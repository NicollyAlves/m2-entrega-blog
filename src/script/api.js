export class Api {

    static baseUrl = "https://blog-m2.herokuapp.com"
    static urlPage = "https://blog-m2.herokuapp.com/posts?"
    static token = localStorage.getItem("@kenzieBlog:token") || ""
    static headers = {
        "Content-type": "application/json",
        Authorization: `Bearer ${this.token}`
    }

    static async login(body) {
        
        const userLogin = await fetch(`${this.baseUrl}/users/login`, {
            method: "POST", 
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => {
            localStorage.setItem("@kenzieBlog:token", res.token)
            localStorage.setItem("@kenzieBlog:userId", res.id)
            window.location.assign("../HTML.homePage.html")
            return res
        })
        .catch(err => console.log(err))
        
        return userLogin
    }

    static async createUser() {
        const users = await fetch(`${this.baseUrl}/users/register`, {
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())
        .catch(err => console.log(err))

        return users
    }

    static async getUser() {
        const posts = await fetch(`${this.baseUrl}/users/${id}`, {
            method: "GET", 
            headers: this.headers
        })
        const data = posts.json()
        return data
    }

    static async getPostByPage(page = Api.urlPage) {
        const pages = await fetch(page, {
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))

        return pages
    }

    static async newPost(body) {
        const post = await fetch(`${this.baseUrl}/posts`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })

        const data = await post.json()
        return data
    }

    static async updatePost(data, id) {
        const post = await fetch(`${this.baseUrl}/posts/${id}`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(data)
        })
        return post
    }

    static async deletePost(id) {
        const post = await fetch(`${this.baseUrl}/posts/${id}`, {
            method: "DELETE",
            headers: this.headers
        })
        .then(res => res.json())
        .then(res => {
            alert("post removido com sucesso")
            return res
        })
        .catch(err => console.log(err))

        return post
    }
}