<script setup lang="js">
import { watchEffect, ref } from 'vue';
import CommentCard from '../components/CommentCard.vue';
import { useRoute } from 'vue-router';

const postId = useRoute().params.id
const comments = ref([])

watchEffect(async () => {
    const commentsData = await fetch("https://jsonplaceholder.typicode.com/comments").then(resp => resp.json())

    for(let i = 0; i < commentsData.length; i++) {
        if(commentsData[i].postId == postId) comments.value.push(commentsData[i])
    }
})
</script>

<template>
    <CommentCard v-for="comment in comments" :commentData="comment"/>
</template>

<style scoped>

</style>