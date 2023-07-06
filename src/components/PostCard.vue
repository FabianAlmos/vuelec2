<script setup lang="js">
defineProps(["postData"])
</script>

<template>
    <div>
        <h1>{{ postData.title }}</h1>
        <p>{{ postData.body }}</p>
    </div>
</template>

<style scoped>
div {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: var(--h1-size);
    border: var(--border-size) solid var(--second-color);
    background-color: var(--main-color);
    color: var(--second-color);
    padding: var(--p-size);
    margin-block: var(--p-size);
    transition: box-shadow var(--tran);
}

h1 {
    
}

p {
    
}

div:hover {
    box-shadow: 0 0 var(--p-size) 1px var(--second-hover);
}
</style>