import type { App } from 'vue'
import baiduAnalytics, { usePush } from 'vue-baidu-analytics'
import { router } from '@/router'

type EventParams = {
  category: string
  action: string
  label?: string
  value?: number
}

const setBaiduAnalytics = (app: App) => {
  app.use(baiduAnalytics, {
    router,
    siteIdList: ['站点id'],
    isDebug: false,
  })
}

/**
 * @description 手动上报页面 PV
 * @params pageUrl 提交上报的 URL ，必须是以 / 开头的相对路径，如果不填，则会默认提交为域名根目录
 */
const useBaiduPv = (url: string) => {
  // 创建钩子变量
  const baidu = usePush()

  // 通过钩子变量去触发方法
  baidu.pv(url)
}

/**
 * @description 手动上报事件分析 比如你的页面上有个 “换一换” 的功能按钮，想要统计这个按钮的点击情况，就可以通过给按钮绑定上报事件来进行点击情况分析。
 * @params EventParams
 */
const useBaiduEvent = ({ category, action, label, value }: EventParams) => {
  // 创建钩子变量
  const baidu = usePush()

  // 通过钩子变量去触发方法
  baidu.event(category, action, label, value)
}
export { setBaiduAnalytics, useBaiduPv, useBaiduEvent }
