<script setup lang="js">
import { watchEffect, ref } from 'vue';
import { useRoute } from 'vue-router'
import PostCard from '../components/PostCard.vue';

const route = useRoute()

const userId = route.params.id
const user = ref({})
const userPosts = ref([])

watchEffect(async () => {
    const users = await fetch("https://jsonplaceholder.typicode.com/users").then(resp => resp.json())
    user.value = users[userId-1]

    const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(resp => resp.json())

    for(let i = 0; i < posts.length; i++)
        if(posts[i].userId == userId) userPosts.value.push(posts[i])
})
</script>

<template>
    <RouterLink v-for="post, i in userPosts" :to="'/post/' + (i+1) + '/2'">
        <PostCard :postData="post"/>
    </RouterLink>
</template>

<style scoped>

</style>