import {addPost, deletePost} from './controllers/PostController'
import {posts, add, reduce} from './domElements'

add.addEventListener("click", addPost)
reduce.addEventListener("click", deletePost)