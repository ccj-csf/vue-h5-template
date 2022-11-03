import type { RouteRecordRaw } from 'vue-router'
export {}

declare module 'vue-router' {
  interface RouteMeta extends Record<string | number | symbol, unknown> {
    //  路由title  一般必填
    title: string
  }
  type Component<T = any> =
    | ReturnType<typeof defineComponent>
    | (() => Promise<typeof import('*.vue')>)
    | (() => Promise<T>)

  // @ts-ignore
  interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
    name: string
    meta: RouteMeta
    component?: Component | string
    components?: Component
    children?: AppRouteRecordRaw[]
    props?: Recordable
    fullPath?: string
  }
}
