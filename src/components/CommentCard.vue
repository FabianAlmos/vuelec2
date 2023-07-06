<script setup lang="js">
defineProps(["commentData"])


</script>

<template>
    <div>
        <h3>Comment by: {{ commentData.email }}</h3>
        <p>{{ commentData.body }}</p>
    </div>
</template>

<style scoped>
div {
    border: var(--border-size) solid var(--second-color);
    color: var(--second-color);
    padding: var(--p-size);
    margin-block: var(--h1-size);
}

h3 {
    margin-block: var(--p-size);
}
</style>