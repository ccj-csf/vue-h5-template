# h5 端开发模板

## 技术栈

- Vite
- Vue3
- Vue-RouterV4
- PiniaV2
- TypeScript
- Vant V3
- less
- windicss
- vw 适配

## 支持特性

- 💡 TypeScript: 应用程序级 JavaScript 的语言
- 📜 postcss-px-to-viewport 移动端适配
- 💎 Vant 是一个轻量、可靠的移动端组件库
- 📐 Pinia 轻量级状态管理
- 🚀 最新技术栈：使用 Vue3/Vite/TypeScript 等前端前沿技术开发
- 📱 windicss 框架加持，解放样式编写和管理
- 👮 `eslint`+`stylelint`+`prettier`+`commitlint`+`editorConfig`
- 👩🏻 css module
- 📈 VueUse

### 包管理工具

- yarn
- 优势
  - 并行安装, 使用缓存, 安装速度快
  - 版本的冥等性 (即 lock file, npm 现在也有了)
  - 输出信息简洁
  - 从 npm 切到 yarn 简单学习即可: [快速入门](https://yarn.bootcss.com/)
  - 也推荐使用 tyarn，速度会更快 [快速入门](https://github.com/yiminghe/tyarn)

### 传送门

- Vue3[使用文档](https://staging-cn.vuejs.org/)
- Vant [使用文档](https://vant-contrib.gitee.io/vant/#/zh-CN/home)
- Pinia [使用文档](https://pinia.web3doc.top/)
- VueRouter [使用文档](https://charts.ant.design/zh/)
- VueUse[使用文档](https://vueuse.org/),推荐使用
- Vite[使用文档](https://cn.vitejs.dev/)
- windicss 原子化 css 框架， [使用文档](https://cn.windicss.org/guide/)
  - 如果你已经熟悉了 Tailwind CSS，可以把 Windi CSS 看作是按需供应的 Tailwind 替代方案
  - 建议使用 windicss 来编写 css，强烈推荐使用

### 基本框架结构说明

```bash
├── .husky                     # husky 配置文件
├── .vscode                    # vscode配置
├── build                      # 构建配置
├── pulic                      # 公共静态资源目录
├── src                        # 源码: 业务代码主要集中在此目录
│   ├── api                    # api 封装
│   ├── assets                 # 静态资源
│   ├── components             # 全局公用组件
│   ├── enums                  # 枚举/常量
│   ├── hooks                  # 全局hook
│   ├── router                 # 路由配置
│   ├── e2e                    # 集成测试用例
│   ├── config                 # 配置文件
│   ├── store                  # store状态管理
│   ├── styles                 # 样式管理
│   ├── utils                  # 工具类
│   ├── views                  # 页面
│   ├── APP.vue                # 根组件
│   ├── main.ts                # 入口文件
├── types                      # 类型文件
├── .cz-config.js              # cz-config配置文件
├── .env                       # 环境变量公用配置
├── .env.development           # 开发环境变量公用配置
├── .env.production            # 生产环境变量公用配置
├── .env.uat                  # 测试环境变量公用配置
├── .eslintignore              # eslint 检验忽略文件
├── .eslintrc.js               # eslint 配置项
├── .gitignore                 # git 忽略文件配置项
├── .stylelintignore           # stylelint忽略配置文件
├── .prettierignore            # prettier忽略文件
├── components.d.ts            # components全局类型自定文件
├── index.html                 # html
├── package.json               # package
├── package-lock.json          # npm锁定安装时的包的版本号，gitignore中忽略提交的
├── postcss.config.js          # postcss配置文件
├── prettier.config.js         # prettier配置文件
├── README.md                  # 使用文档
├── stylelint.config.js        # stylelint配置文件
├── windi.config.js            # windi 配置文件
├── tsconfig.json              # ts 配置文件
├── yarn.lock                  # yarn锁定安装时的包的版本号，gitignore中忽略提交的
```

### 目录补充说明

- build

  - script 打包脚本配置文件
  - vite vite 配置文件
    - plugin 插件集合

- src 目录

  - 业务相关的代码主要集中在 src 目录下

  - api: 请求封装，后面会详细讲解

  - assets: 静态资源放在该目录下，管理 images 和 icons
    - images 管理图片资源，图片命名采用模块+图片名的方式,eg:home-bg.png
      - 公用图片不用加模块前缀，一般来说模块名为路由对应页面的路径
      - 采用中划线进行连接

- components: 全局公用组件

  - 文件名和组件名必填且使用 Pascal 命名且保持一致
  - 组件命名，傻瓜组件以 Base 开头命名，带业务的逻辑组件以 Sp 开头，eg：BaseTable、BaseSvgIcon、TjSelectCity(ps:Tj 腾晋简写)
  - 全局组件多个业务用到才可提取到当前文件下进行管理，不然请就近维护
  - 详细目录结构参照 components 下 BaseButton 组件的结构，不需要的文件可删除，比如 components 文件
  - 自定义组件通过目录下 index.ts 做统一导出，页面通过引入导出文件进行使用，具体使用请查看 index.ts 文件

  - config: 配置文件管理

    - index.ts 全局配置文件
    - 你认为可以抽离成配置的文件的都可以抽到当前文件夹下维护

  - enums:常量文件
    - httpEnum.ts http 相关常量文件
    - exceptionEnum.ts exception 相关常量文件
    - 根据类型新建对应文件进行维护
    - 文件命名采用小驼峰

- hooks

  - 逻辑复用采用 hooks 方式，不推荐使用类组件的形式
  - 文件名以 use 开头，比如 useLoadMore，文件命名已 use 开头，eg：useTable、useConfirm
  - 项目引入引入了 VueUse，自定义 hooks 前请先查看有没有封装好的 hook，具体使用方式请查看传送门中有文档地址

  - router: 路由相关文件
  - 路由跳转请使用 name 进行跳转，不要使用 path,路由层级变动时更改很麻烦
  - modules 按照模块对路由进行管理
  - route 定义规范
    1. 多个单词 path 用-连接，eg：goods-detail
    2. name 用 pascal 命名，建议模块作为前缀，eg:ProductList、ProductDetail
    3. meta: 额外信息配置

```js
import type { AppRouteRecordRaw } from '@/router/types'
const HomeRoute: AppRouteRecordRaw = {
  path: '/home',
  name: 'Home',
  component: () => import('@/views/home/index.vue'),
  meta: {
    title: '首页',
  },
}
```

- store: 以文件为模块的形式组织
  - 模块写在 modules 中, id 名和文件名同名
  - 文件以小驼峰形式命名
  - common 文件是管理公用 store 的管理
  - 每个文件中有个统一导出的使用函数

```js
// index.ts文件
import type { App } from 'vue'
import { createPinia } from 'pinia'

const store = createPinia()

export function setupStore(app: App<Element>) {
  app.use(store)
}

export { store }

// 模块示列
import { defineStore } from 'pinia'
import { store } from '@/store'

interface UserState {
  userInfo: Store.UserInfo;
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    userInfo: {
      username: '',
      age: 0,
    },
  }),
  getters: {
    getName(): number {
      return 3
    },
  },
  actions: {
    resetState() {},
  },
})

export function useUserStoreWithOut() {
  return useUserStore(store)
}

// 使用层
<template>
  <div class="flex">
    <div class="bg-blue-200 w-200px test" testDemo="1"> 首页 </div>
    <div class="bg-red-200 w-175px">2</div>
  </div>
</template>
<script lang="ts" setup>
  import { useUserStoreWithOut } from '@/store/modules/user'
  const store = useUserStoreWithOut()
  console.log('store', store)
</script>


```

- styles: 样式管理

  - modules 样式模块管理

    1. index.less 样式导出文件
    2. util.less 工具类，项目已经集成 windi，建议不在里面添加，除非 windi 满足不了
    3. variables.less，样式变量管理
    4. vant.less，全局 vant 样式覆盖文件

- utils: 公用工具函数等

  - 文件名以小驼峰命名，eg：setPageTitle
  - http 基于 axios 封装
    - transform 文件下拆分各钩子对应处理处理
    - 之所以新建 axios 文件做包裹，方便后续通过适配器模式更换请求模块
  - 工具类能使用 lodash 来处理，通过使用 lodash 来处理，loadsh-es 用 es module 的静态性带来的 tree-shacking 能力
  - auth token 操作逻辑
  - date 时间处理封装，新增的方法请尽量借用 dayjs 处理
  - storage 存储处理
  - is 判断是否是 xx 类型工具函数
  - validator 校验、正则工具
  - 工具类能使用类静态写法还进行封装

```ts
// axios配置项说明
const axios = new Axios({
  // 认证方案，例如: Bearer
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#authentication_schemes
  authenticationScheme: '',
  // 接口超时时间 单位毫秒
  timeout: 10 * 1000,
  // 接口可能会有通用的地址部分，可以统一抽取出来
  prefixUrl: prefix,
  headers: { 'Content-Type': ContentTypeEnum.JSON },
  // 数据处理方式，见下方说明
  transform,
  // 配置项，下面的选项都可以在独立的接口请求中覆盖
  requestOptions: {
    // 默认将prefix 添加到url
    joinPrefix: true,
    // 是否返回原生响应头 比如：需要获取响应头时使用该属性
    isReturnNativeResponse: false,
    // 需要对返回数据进行处理
    isTransformRequestResult: true,
    // post请求的时候添加参数到url
    joinParamsToUrl: false,
    // 格式化提交参数时间
    formatDate: true,
    // 消息提示类型
    errorMessageMode: 'message',
    // 接口地址
    apiUrl: globSetting.apiUrl,
    //  是否加入时间戳
    joinTime: true,
    // 忽略重复请求
    ignoreCancelToken: true,
  },
})
```

```ts
// auth工具类
import GoodStorage from 'good-storage'
export default class Auth {
  static token = 'token'
  static setToken(value: string) {
    return GoodStorage.set(this.token, value)
  }
  static getToken() {
    return GoodStorage.get(this.token)
  }
}
```

- views: 主要的页面放置在其中, 根目录下不能有任何组件文件, 所有的页面都需要以文件夹的形式组织

  - 顶部文件夹以一级菜单为单位命名文件夹方便查找和定位
  - 文件内 index.ts 作为入口文件
  - 文件名采用中划线连接，eg：order-detail
  - 导出函数组件采用大驼峰命名
  - 文件夹下的小程序文件相关文件命名必须为 index.类型文件名结尾
  - 需要组件拆分的场景，新建 components 文件管理当前模块组件，组件名 Pascal 命名
  - 多模块复用组件请考虑抽离到全局 components 文件下
  - index.less 为页面组件样式，样式配置用已开启 css module
  - helper 为当前页面帮助函数、hooks 集合

### Api 层设计

- 封装 api
- 隔离 api 实现 (ajax, axios, fetch), 换实现时, 只需修改 Api 相关文件的部分实现, 不会影响到业务层，注意类名须以 Api 结尾
- 通过类的形式调用，也可以避免命名空间冲突的问题
- http 模块对 axios 进行了二次封装，增加拦截器功能等功能
- axios 请求封装存放于 src/utils/http/axios 文件夹内部

- CommonApi 基类,可在此类中做公用数据处理

```js
import CommonApi from './common'
// api层
class UserApi extends CommonApi {
  /**
   * @description: 登录
   */
  login(params: API.LoginParams) {
    return this.post<API.LoginResult>({
      url: '/login',
      params,
      errorMessageMode: 'modal',
    })
  }

  /**
   * @description: 获取用户信息
   */
  getUserInfo() {
    return this.get<API.UserInfoResult>({
      url: '/getUserInfo',
      errorMessageMode: 'none',
    })
  }

  /**
   * @description: 获取用户信息
   */
  logout() {
    return this.delete<string>({
      url: '/logout',
    })
  }
}

export default new UserApi()

// 使用层
<script lang="ts" setup>
  import userApi from '@/api/user'
  userApi.getUserInfo()
</script>
```

### TypeScript

- TypeScript 的好处已经无须赘述，无论是开发成本还是维护成本都能大大减少，TypeScript 的最佳实践。

- 什么时候推荐用 type 什么时候用 interface ？

  - 推荐任何时候都是用 type， type 使用起来更像一个变量，与 interface 相比，type 的特点如下：
  - 表达功能更强大，不局限于 object/class/function 要扩展已有 type 需要创建新 type，不可以重名支持更复杂的类型操作
  - 基本上所有用 interface 表达的类型都有其等价的 type 表达。

- 定义接口数据
  - 任何一个项目都离不开对数据和接口的处理，拼接数据和接口是形成业务逻辑也是前端的主要工作之一，将接口返回的数据定义 TypeScript 类型可以减少很多维护成本和查询 api 的时间。
  - 推荐在 src/api/API.d.ts 中定义接口数据的类型，以用户基本信息为例：

```ts
/**
 * @description API类型定义
 * @file 入参、出参管理文件
 */
declare namespace API {
  /**
   * @description: Login参数
   */
  type LoginParams = {
    username: string
    password: string
  }

  type RoleInfo = {
    roleName: string
    value: string
  }

  /**
   * @description: Login成功返回数据
   */
  type LoginResult = {
    userId: string | number
    token: string
    role: RoleInfo
  }
}
```

- 推荐 json2ts[地址](http://json2ts.com/)来自动转化。

- 在使用时我们就可以很简单的来使用, d.ts 结尾的文件会被 TypeScript 默认导入到全局，但是其中不能使用 import 语法，如果需要引用需要使用三斜杠。

### types

- types 下文件
  - api.d.ts 层类型定义文件
  - axios.d.ts 层类型自定文件
  - global.d.ts 全局类型申明文件
  - module.d.ts module 类型申明文件
  - store.d.ts store 类型申明文件
  - vue-router.d.ts vue 路由扩展申明文件

### UI 组件库

- 项目已引入\*\*`Vant`最新版本组件 3.4.9
- 暂未使用更高版本，高版本跟官网按需加载组件结合有 bug，等官方解决后再做升级
- components/lazyUseVant 为 vant 文件的全局按需注入文件，需要使用的组件在此文件下引入即可
- components/index.ts 为自定义组件统一导出文件

### 移动端屏幕适配

- 统一使用 vw 单位适配，项目中已引入配置好 postcss 插件，开发时正常使用 px 插件即可正确转换，相关配置见：.postcssrc.config.js 文件，**设计稿统一为 375 px**

#### 组件通信

- 原则上能不使用 Pinia 的场景通过组件之间的通信方式即可
- 根据业务流程情况，利用 Pinia 和前端存储做好页面缓存
- Pinia 建议是用来处理一些公用数据的场景，比如用户信息之类的

### 异步操作

- 尽可能使用 async + await 处理
- 可读性更强+异常捕捉

### 前端储存

- 使用 api 尽量封装后再使用
- 不要直接裸用
- 对于 cookie 的操作使用`js-cookie`，请基于此库进行二次封装使用,[文档](https://github.com/js-cookie/js-cookie)
- storage 的操作使用`good-storage`，请基于此库进行二次封装使用,[文档](https://github.com/ustbhuangyi/storage#readme)

### 添加一个新功能

- 首先在 views 中添加新页面的路由配置
- 在 api 中新建新页面需要操作数据的 api
- 将 router/routes/index.ts 中配置路由

### 代码提交

项目集成了`git hooks`，提交报错时请按照提示进行修改后尝试

### 统一使用 commitizen 工具提交

- 项目配置了规则，根据提示操作即可 描述部分尽量言简意赅，避免随意或无意义的 msg

- commit 之前请先自己 review 一下代码，减少错误

```bash
git add ./**.js
# or
git add .

npm run commit
# or
yarn commit

```

### git commit message 说明

- feat: 新功能
- fix: bug 修复
- docs: 仅修改文档
- style: 修改格式（空格，格式化，省略分号等），对代码运行没有影响
- refactor: 重构（既不是修 bug ，也不是加功能）
- build: 构建流程、外部依赖变更，比如升级 npm 包、修改 webpack 配置等
- perf: 性能优化
- test: 测试相关
- chore: 对构建过程或辅助工具和库（如文档生成）的更改
- ci: ci 相关的更改
- revert:revert 回滚 commit
- wip:pr 的提交
- mod:不确定分类的修改
- workflow:工作流改进
- merge:分支合并
- types 类型文件

### 分支管理

- develop 为开发分支，master 为测试分支，pro_date 为预发布分支，prod_date 为正式环境分支，原则上这些分支只能通过合并的方式就行提交，不允许上述分支上直接修改提交
- 功能分支请从 develop 份上检出一份进行开发，命名为 feature*`姓名`*`分支创建时`，eg：feature_ccj_11-05,也可以根据特定功能进行命名，比如 feature/http
- 测试环境修复分支从 master 环境新建 bugfix 进行修复，修复完成后合并到 master 分支，名为为 bugfix*姓名*分支创建时间，eg：bugfix_ccj_11-11，预发布问题从测试环境修复和，直接从 master 提交 pr 合并到 prod_date 分支即可，因为 bug 可能需要修改多个，建议使用此命名命名分支
- 生产环境问题修复，从 prod_date 分支新建 hotfix 分支进行修复，修复完成后先合并到 master 让 qa 回归后再，qa 验证没问题后，再从 master 合并到 prod_prod 分支，命名跟测试环境 bug 分支一样，前缀换成 hotfix,修复完成后再从 prod_date 合并到 develop
- bug 修复和功能分支属于临时分支，开发修复完成及时删除
- prod_date 属于生产的临时分支，后续会通过脚本来定期来进行清理

### ESLint

- 不管是多人合作还是个人项目，代码规范都是很重要的。这样做不仅可以很大程度地避免基本语法错误，也保证了代码的可读性。
- 项目已经集成 eslint 校验，不通过本地运行会报错，并且不能提交到远程仓库
- vscode 和 eslint 自动格式化代码，[具体配置参照文档](https://panjiachen.gitee.io/vue-element-admin-site/zh/guide/advanced/eslint.html#%E9%85%8D%E7%BD%AE%E9%A1%B9)
- 所有的配置文件都在 .eslintrc.js 中。 根据官方的 eslint 规则做了少许的修改，后续会持续根据使用情况进行配置

### 其他

- 项目内集成了以下几种代码校验方式

  - eslint 用于校验代码格式规范
  - commitlint 用于校验 git 提交信息规范
  - stylelint 用于校验 css/less 规范 -prettier 代码格式化

- 编辑器体检 使用 vscode
- 如有需要增加的类库讨论后再做新增
- 其他: 使用第三方库或者组件等的时候, 不要裸用或者裸继承. 最好自己封装一层
  - 因为:没法进行一些通用处理
- 如果使用的库出现问题, 只能到处去修改
- 尽量避免使用硬编码(在代码中直接裸写一些后面可能会变化的值, 且在到处使用)

- 如 `if ( code === 1 )`

  `if ( code === ResTypes.SUCCESS )`

### 如何运行项目

- 安装依赖

  ```bash
  tyarn
  ```

  运行开发模式(编译并支持修改热加载)

  ```bash
  npm run dev
  ```

  测试环境打包

  ```bash
  npm run build:uat
  ```

  生产模式打包

  ```bash
   npm run build:prod
  ```

  打包分析

  ```bash
   npm run analyze
  ```
