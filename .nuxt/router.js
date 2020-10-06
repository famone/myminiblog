import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _76bf505b = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _f87634c6 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _67f357ea = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _50538921 = () => interopDefault(import('../pages/posts/index.vue' /* webpackChunkName: "pages/posts/index" */))
const _2f57edb5 = () => interopDefault(import('../pages/admin/new-post/index.vue' /* webpackChunkName: "pages/admin/new-post/index" */))
const _f7ab2456 = () => interopDefault(import('../pages/blog/_id/index.vue' /* webpackChunkName: "pages/blog/_id/index" */))
const _1bdda8e8 = () => interopDefault(import('../pages/posts/_id/index.vue' /* webpackChunkName: "pages/posts/_id/index" */))
const _3b9ce69d = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _76bf505b,
    name: "about"
  }, {
    path: "/admin",
    component: _f87634c6,
    name: "admin"
  }, {
    path: "/blog",
    component: _67f357ea,
    name: "blog"
  }, {
    path: "/posts",
    component: _50538921,
    name: "posts"
  }, {
    path: "/admin/new-post",
    component: _2f57edb5,
    name: "admin-new-post"
  }, {
    path: "/blog/:id",
    component: _f7ab2456,
    name: "blog-id"
  }, {
    path: "/posts/:id",
    component: _1bdda8e8,
    name: "posts-id"
  }, {
    path: "/",
    component: _3b9ce69d,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
