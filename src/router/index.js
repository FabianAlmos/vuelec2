import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/HomeView.vue"
import User from "../views/UserView.vue"
import Posts from "../views/PostsView.vue"
import Post from "../views/PostView.vue"
import Comments from "../views/CommentsViews.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user/:id/:postLimit',
      name: 'user',
      component: User
    },
    {
      path: '/posts/:id',
      name: 'posts',
      component: Posts
    },
    {
      path: '/post/:id/:comments',
      name: 'post',
      component: Post
    },
    {
      path: '/comments/:id',
      name: 'comments',
      component: Comments
    }
  ]
})

export default router
