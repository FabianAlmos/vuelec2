<script setup lang="js">
import { ref, watchEffect } from 'vue';
import UserCard from '../components/UserCard.vue';

const users = ref([])

watchEffect(async () => {
    users.value = await fetch("https://jsonplaceholder.typicode.com/users").then(resp => resp.json())
})
</script>

<template>
    <UserCard v-for="user in users" :id="user.id" :name="user.name" :username="user.username" :canNavigate="true"/>
</template>

<style scoped>

</style>