import type { Router } from 'vue-router'
export function createPermissionGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    document.title = to.meta.title
    console.log('to', to)
    console.log('next', next)
    next()
  })
}
