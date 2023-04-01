<script setup>
import NavBar from './components/navbar/NavBar.vue'
import BGSection from './components/BGSection.vue'
import Logo from './components/Logo.vue'
</script>

<template>
  <div id="app-content">
    <Logo/>
    <section class="content">
      <BGSection class="nav-bar">
        <NavBar/>
      </BGSection>
      <BGSection class="board">
        <router-view></router-view>
      </BGSection>
    </section>
  </div>
</template>

<style scoped>

#app-content > .content {
  display: flex;
  flex-direction: row;
}

#app-content > .content .nav-bar {
  min-width: 14rem;
}

#app-content > .content .board {
  width: 70vw;
  max-width: 52rem;
}

@media screen and (max-width: 600px) {
  #app-content > .content {
    flex-wrap: wrap;
  }
  #app-content > .content .nav-bar {
    margin: 0.8em auto;
  }
}

</style>
