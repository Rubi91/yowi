<template>
    <h1 class="title" itemprop="name">{{title}}</h1>
</template>

<script>
    export default {
        name: "Title",
        props: {
            title: String
        }
    }
</script>


<style scoped>
    .title {
        margin: 0 10px;
        font-size: 1rem;
        text-align: left;
        color: var(--text-color);
    }
</style>
