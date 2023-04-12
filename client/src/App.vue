<script setup>
import { ref } from "vue";

import NavBar from './components/NavBar.vue'
import BGSection from './components/BGSection.vue'
import Logo from './components/Logo.vue'

const widerBoard = ref(false);

</script>

<template>
  <div id="app-content">
    <Logo/>
    <section class="content">
      <BGSection class="nav-bar">
        <NavBar/>
      </BGSection>
      <BGSection class="board" :class="{'board-wider': widerBoard}">
        <router-view v-slot="{ Component }">
          <component :is="Component" @isWider="(n) => widerBoard = n" />
        </router-view>
      </BGSection>
    </section>
  </div>
</template>

<style lang="scss">

#app-content {
  padding: 1rem;
  margin: 0 auto;
}

#app-content > .content {
  display: flex;
  flex-direction: row;

  .nav-bar {
    min-width: 18rem;
  }
  .board{
    text-align: center;
    max-width: 60vw;
  }
  .board-wider{
    width: 60vw;
  }
}

@include respond-to(small) {

  #app-content > .content {
    flex-wrap: wrap;

    .nav-bar, .board{
      margin: 0.8em auto;
    }
    .board{
      text-align: center;
      max-width: 95vw;
    }
    .board-wider{
      width: 95vw;
    }
  }
}
</style>
