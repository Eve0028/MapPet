<script setup>
import { computed, inject } from 'vue'
import MappetButton from './buttons/MappetButton.vue'
import Button from "./buttons/Button.vue";
import { useAuthStore } from "../stores/auth.js";
import { storeToRefs } from "pinia";
import { useRouter } from 'vue-router'

const router = useRouter()

const authStore = useAuthStore()
const {user} = storeToRefs(authStore)
const {logout} = authStore

const MenuItemsAccount = {
  item1: {
    id: 'account-item1',
    name: 'My reports',
    uri: '/account-reports'
  },
  item2: {
    id: 'account-item2',
    name: 'My account',
    uri: '/account'
  }
}

const MenuItemsLost = {
  item1: {
    id: 'lost-item1',
    name: 'Report a missing pet',
    uri: '/report-lost'
  },
  item2: {
    id: 'lost-item2',
    name: 'Search for a missing pet',
    uri: '/mappet'
  },
  item3: {
    id: 'lost-item3',
    name: 'What else to do',
    uri: '/what-to-do-lost'
  }
}

const MenuItemsFind = {
  item1: {
    id: 'find-item1',
    name: 'Report a found pet',
    uri: '/report-found'
  },
  item2: {
    id: 'find-item2',
    name: 'Look for the owner',
    uri: '/mappet'
  },
  item3: {
    id: 'find-item3',
    name: 'What else to do',
    uri: '/what-to-do-found'
  }
}

function logOut() {
  logout()
  router.push('/login');
}

</script>

<template>
  <nav class="navbar">
    <Button @click="$router.push('/login')" class="log-in-button" button-text="Log in" v-if="!user"/>
    <!--    <a class="nav-link" @click.prevent="logOut" v-if="user">-->
    <!--      LogOut-->
    <!--    </a>-->
    <MappetButton class="mappet-button-menu"/>

    <ul class="menu-items menu-items-account" v-if="user">
      <router-link v-for="item of MenuItemsAccount" :key="item.id"
                   active-class="active"
                   exact
                   :to="item.uri"
                   class="nav-link">
        <li>{{ item.name }}</li>
      </router-link>
      <a href="#" class="nav-link">
        <li @click.prevent="logOut" v-if="user">
          LogOut
        </li>
      </a>
    </ul>

    <h2 class="menu-header">
      <b class="header-first-letter header-first-letter-lost">Lost</b> Pet Zone
    </h2>
    <ul class="menu-items menu-items-lost">
      <router-link v-for="item of MenuItemsLost" :key="item.id"
                   active-class="active"
                   exact
                   :to="item.uri"
                   class="nav-link">
        <li>{{ item.name }}</li>
      </router-link>
    </ul>

    <h2 class="menu-header">
      <b class="header-first-letter header-first-letter-found">Found</b> Pet Zone
    </h2>
    <ul class="menu-items menu-items-found">
      <router-link v-for="item of MenuItemsFind" :key="item.id"
                   active-class="active"
                   exact
                   :to="item.uri"
                   class="nav-link">
        <li>{{ item.name }}</li>
      </router-link>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav.navbar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.menu-items-account {
  margin-top: 1em;
}

.menu-items {
  padding: 0 1em;
  font-weight: 500;
  width: 100%;

  li {
    border-bottom: 1px solid #bbbbbb;
    padding: 0.6em 0.6rem;
  }
}

.menu-items-lost a:hover {
  color: $main-color-lost;
}

.menu-header {
  margin-top: 1.2em;
  margin-bottom: 0.3em;
}

.log-in-button {
  width: 100%;
  border: 2px solid $main-color-found;
  background-color: $main-color-found;
  color: #ffffff;

  margin-bottom: 0.7em;
  line-height: 2em;

  &:hover {
    background-color: #ffffff;
    color: $main-color-found;
  }
}

.mappet-button-menu {
  width: 100%;
}

.header-first-letter-lost {
  color: $main-color-lost;
}

.header-first-letter-found {
  color: $main-color-found;
}

</style>