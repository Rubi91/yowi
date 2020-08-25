<template>
  <header  class="header logo">
      <a href="https://yowi.tv/" >
          <picture class="logo">
              <source media="(min-width: 900px)" srcset="https://yowi.tv/img/yowiLogo.bd3c2f1a.svg">
              <source media="(max-width: 480px)" srcset="https://yowi.tv/img/03.90d40a14.svg">
              <img src="https://yowi.tv/img/yowiLogo.bd3c2f1a.svg" alt="Yowi logo"/>
          </picture>
      </a>
  </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .header {
    padding: 1rem;
    }
    .logo {
        width: 12.5em;
    }
</style>
