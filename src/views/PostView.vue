<script setup lang="js">
import { watchEffect, ref } from 'vue';
import { useRoute } from 'vue-router'
import PostCard from '../components/PostCard.vue';
import CommentCard from '../components/CommentCard.vue';

const route = useRoute()

const postId = route.params.id
const post = ref({})
const commentsLink = `/comments/${postId}`
const comments = ref([])
const commentsLimit = route.params.comments

watchEffect(async () => {
    const commentsData = await fetch("https://jsonplaceholder.typicode.com/comments").then(resp => resp.json())
    let counter = 0

    for(let i = 0; i < commentsData.length && counter < commentsLimit; i++) {
        if(commentsData[i].postId == postId) {
            comments.value.push(commentsData[i])
            counter++
        }
    }

    const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(resp => resp.json())

    for(let i = 0; i < posts.length; i++) {
        if(posts[i].id == postId) {
            post.value = posts[i]
            return
        }
    }
})
</script>

<template>
    <PostCard :postData="post"/>
    <CommentCard v-for="comment in comments" :commentData="comment"/>
    <RouterLink :to="commentsLink">
        <h1>Show all comments</h1>
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