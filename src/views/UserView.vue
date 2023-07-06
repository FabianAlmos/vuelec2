<script setup lang="js">
import { watchEffect, ref } from 'vue';
import { useRoute } from 'vue-router'
import PostCard from '../components/PostCard.vue';
import UserCard from '../components/UserCard.vue';

const route = useRoute()

const userId = route.params.id
const user = ref({})
const userPosts = ref([])

const postsPage = `/posts/${userId}`

watchEffect(async () => {
    const users = await fetch("https://jsonplaceholder.typicode.com/users").then(resp => resp.json())
    user.value = users[userId-1]

    const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(resp => resp.json())
    let counter = 0

    for(let i = 0; i < posts.length && counter < route.params.postLimit; i++) {
        if(posts[i].userId == userId) {
            userPosts.value.push(posts[i])
            counter++
        }
    }
})
</script>

<template>
    <UserCard :id="user.id" :name="user.name" :username="user.username" :canNavigate="false"/>
    <PostCard v-for="post in userPosts" :postData="post"/>
    <RouterLink :to="postsPage">
        <h1>Click for more posts</h1>
    </RouterLink>
</template>

<style scoped>
h1 {
    color: var(--second-color);
    width: fit-content;
    margin: var(--h1-size) auto;
    transition: color var(--tran), text-shadow var(--tran);
}

h1:hover {
    color: var(--second-hover);
    text-shadow: 0 0 calc(var(--p-size) * 0.5) var(--second-hover);
}
</style>