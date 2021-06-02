import { posts } from '../domElements'
import { stack, counter } from '../data/stack'
import makeid from '../utils/MakeID'

if (stack.length === 0) {
    posts.innerHTML = "<h1>Add or reduce elements!</h1>"
}


export const addPost = () => {
    const before = stack.length
    stack.push(makeid(5))
    if (stack.length > before) {
        const li = document.createElement("li")
        const title = document.createTextNode(stack[before])
        li.id = stack[before]
        console.log(stack)
        console.log("ID:", li.id)
        li.className = "list-group-item"
        li.appendChild(title)
        posts.appendChild(li)
    }
}

export const deletePost = () => {
    const removed = stack.pop()
    const before = stack.length
    console.log("REMOVED", removed)
    if (before === 0) {
        console.log(stack.length)
        posts.innerHTML = "<h1> Empty stack. </h1>"
        return
    }
    const getRemoved = document.getElementById(removed)
    getRemoved.remove()
}
