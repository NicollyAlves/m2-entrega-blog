export class Api {

    static baseUrl = "https://blog-m2.herokuapp.com"
    static urlPage = "https://blog-m2.herokuapp.com/posts?"
    static token = localStorage.getItem("@kenzieBlog:token") || ""
    static headers = {
        "Content-type": "application/json",
        Authorization: `Bearer ${this.token}`
    }

    static async loginUser(body) {
        
        const userLogin = await fetch(`${this.baseUrl}/users/login`, {
            method: "POST", 
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => {
            localStorage.setItem("@kenzieBlog:token", res.token)
            localStorage.setItem("@kenzieBlog:userId", res.userId)

            if(res.token !== undefined){
                window.location.assign("../../src/HTML/homePage.html")
            }
            
            console.log(res);
            return res
        })
        .catch(err => console.log(err))
        
        return userLogin
    }

    static async createUser(body) {
        const user = await fetch(`${this.baseUrl}/users/register`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))

        return user
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
        .then(res => console.log(res.json()))
        .catch(err => console.log(err))

        return post
    }

    static async updatePost(data, id) {
        const post = await fetch(`${this.baseUrl}/posts/${id}`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(data)
        })
        .then(res => console.log(res.json()))
        .catch(err => console.log(err))

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