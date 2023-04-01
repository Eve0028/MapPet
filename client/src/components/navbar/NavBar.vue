<script setup>
import { inject } from 'vue'
import MappetButton from '../buttons/MappetButton.vue'
import Button from "../buttons/Button.vue";

const isLogged = inject('logged')

</script>

<template>
  <nav class="navbar">
    <Button @click="$router.push('/login')" class="log-in-button" button-text="Log in" v-if="!isLogged"/>
    <MappetButton class="mappet-button-menu"/>
    <ul class="menu-items menu-items-account" v-if="isLogged">
    </ul>

    <h2 class="menu-header">
      <b class="header-first-letter header-first-letter-lost">Lost</b> Pet Zone
    </h2>
    <ul class="menu-items menu-items-lost">
    </ul>

    <h2 class="menu-header">
      <b class="header-first-letter header-first-letter-found">Found</b> Pet Zone
    </h2>
    <ul class="menu-items menu-items-found">
    </ul>
  </nav>
</template>

<style scoped>
nav.navbar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.menu-items li {
  border-bottom: 1px solid #bbbbbb;
  padding: 0.6em 0.6rem;
}

.menu-items {
  padding: 0 1em;
  font-weight: 500;
  width: 100%;
}

.menu-items-lost li:hover {
  color: var(--main-color-lost);
}

.menu-header {
  margin-top: 1.2em;
  margin-bottom: 0.3em;
}

.log-in-button {
  width: 100%;
  border: 2px solid var(--main-color-found);
  background-color: var(--main-color-found);
  color: #ffffff;

  margin-bottom: 0.7em;
  line-height: 0.5em;
}

.log-in-button:hover {
  background-color: #ffffff;
  color: var(--main-color-found);
}

.mappet-button-menu {
  width: 100%;
}

.header-first-letter-lost {
  color: var(--main-color-lost)
}

.header-first-letter-found {
  color: var(--main-color-found)
}

</style>