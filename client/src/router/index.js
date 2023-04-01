import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    name: 'home',
    path: "/",
    component: Home
  },
  {
    name: "login",
    path: "/login",
    component: () => import("../views/Login.vue")
  },
  {
    name: "register",
    path: "/register",
    component: () => import("../views/Register.vue")
  },
  {
    name: "account",
    path: "/account",
    component: () => import("../views/Account.vue")
  },
  {
    name: "account-reports",
    path: "/account/reports",
    component: () => import("../views/AccountReports.vue")
  },
  {
    name: "account-settings",
    path: "/account/settings",
    component: () => import("../views/Account.vue")
  },
  {
    name: "mappet",
    path: "/mappet",
    component: () => import("../views/MapPet.vue")
  },
  { path: '/report/:id', component: () => import("../views/ReportView.vue") },
  { path: '/editor/:id', component: () => import("../views/ReportEdit.vue") },
  {
    name: "report-lost",
    path: "/report-lost",
    component: () => import("../views/ReportLostForm.vue")
  },
  {
    name: "report-found",
    path: "/report-found",
    component: () => import("../views/ReportFoundForm.vue")
  },
  {
    name: "what-to-do-lost",
    path: "/what-to-do/lost",
    component: () => import("../views/WhatToDoLost.vue")
  },
  {
    name: "what-to-do-found",
    path: "/what-to-do/found",
    component: () => import("../views/WhatToDoFound.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
