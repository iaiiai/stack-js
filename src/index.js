import {addPost, deletePost} from './controllers/PostController'

export const posts = document.querySelector("#posts")
export const add = document.getElementById("add")
export const reduce = document.getElementById("reduce")


add.addEventListener("click", addPost)
reduce.addEventListener("click", deletePost)