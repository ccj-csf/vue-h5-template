import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
// import Components from 'unplugin-vue-components/vite'
// import { VantResolver } from 'unplugin-vue-components/resolvers'
import styleImport, { VantResolve } from 'vite-plugin-style-import'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import windiCSS from 'vite-plugin-windicss'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import { configHtmlPlugin } from './html'
import { configPwaConfig } from './pwa'
import { configCompressPlugin } from './compress'
import { configVisualizerConfig } from './visualizer'
import { configImageminPlugin } from './imagemin'
import { configHmrPlugin } from './hmr'

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const {
    VITE_USE_IMAGEMIN,
    VITE_LEGACY,
    VITE_BUILD_COMPRESS,
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE,
  } = viteEnv

  const vitePlugins: (Plugin | Plugin[])[] = [
    vue(),
    // Components({
    //   resolvers: [VantResolver()],
    // }),
    styleImport({
      resolves: [VantResolve()],
    }),
    vueJsx(),
    vueSetupExtend(),
  ]

  // vite-plugin-windicss
  vitePlugins.push(windiCSS())

  // TODO
  !isBuild && vitePlugins.push(configHmrPlugin())

  // @vitejs/plugin-legacy
  VITE_LEGACY && isBuild && vitePlugins.push(legacy())

  // vite-plugin-html
  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild))

  // rollup-plugin-visualizer
  vitePlugins.push(configVisualizerConfig())

  // 以下插件只在生产环境中工作
  if (isBuild) {
    //vite-plugin-imagemin
    VITE_USE_IMAGEMIN && vitePlugins.push(configImageminPlugin())

    // rollup-plugin-gzip
    vitePlugins.push(
      configCompressPlugin(VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE),
    )

    // vite-plugin-pwa
    vitePlugins.push(configPwaConfig(viteEnv))
  }

  return vitePlugins
}
