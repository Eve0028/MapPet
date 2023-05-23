<script setup>
import { useAuthStore } from "../stores/auth.js";
import { storeToRefs } from "pinia";
import ReportButtons from '../components/ReportButtons.vue'

const authStore = useAuthStore()
const {user} = storeToRefs(authStore)

</script>

<template>

  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{ user.username }}</strong> Profile
      </h3>
    </header>
    <p>
      <strong>Token:</strong>
      {{ user.accessToken.substring(0, 20) }} ...
    </p>
    <p>
      <strong>Id:</strong>
      {{ user.id }}
    </p>
    <p>
      <strong>Email:</strong>
      {{ user.email }}
    </p>
    <strong>Authorities:</strong>
    <ul>
      <li v-for="role in user.roles" :key="role">{{ role }}</li>
    </ul>
  </div>

</template>

<style lang="scss" scoped>

</style>