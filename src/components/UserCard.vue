<script setup lang="js">
import { RouterLink } from "vue-router"

const props = defineProps(["id", "name", "username", "canNavigate"])

const navLink = `/user/${props.id}/3`
</script>

<template>
    <RouterLink class="main-container" :to="canNavigate ? navLink : ''">
        <div class="info-container">
            <span class="text">Name:</span>
            <span class="text">{{ name }}</span>
        </div>
        <div class="info-container">
            <span class="text">Username:</span>
            <span class="text">{{ username }}</span>
        </div>
    </RouterLink>
</template>

<style scoped>
.main-container {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    background-color: var(--second-color);
    color: var(--main-color);
    padding: var(--p-size);
    margin-block: var(--p-size);
    transition: box-shadow var(--tran);
}

.info-container {
    display: flex;
    gap: var(--p-size);
}

.main-container:hover {
    box-shadow: 0 0 var(--p-size) 1px var(--second-hover);
}
</style>