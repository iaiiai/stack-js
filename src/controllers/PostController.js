import { posts } from '../index'
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
        const title = document.createTextNode(stack[counter])
        li.id = stack[counter]
        li.className = "list-group-item"
        li.appendChild(title)
        posts.appendChild(li)
    }
}

export const deletePost = () => {
    const removed = stack.pop()
    if (counter === 0) {
        posts.innerHTML = "<h1> Empty stack. </h1>"
        return
    }
    counter-=1
    const getRemoved = document.getElementById(removed)
    getRemoved.remove()
}
