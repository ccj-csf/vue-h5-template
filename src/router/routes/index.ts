import type { AppRouteRecordRaw } from 'vue-router'

export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: '/home',
  meta: {
    title: '跟路由',
  },
}

export const MyRoute: AppRouteRecordRaw = {
  path: '/my',
  name: 'My',
  component: () => import('@/views/my/index.vue'),
  meta: {
    title: '个人中心',
  },
}

export const HomeRoute: AppRouteRecordRaw = {
  path: '/home',
  name: 'Home',
  component: () => import('@/views/home/index.vue'),
  meta: {
    title: '首页',
  },
}

export const routes = [RootRoute, HomeRoute, MyRoute]
