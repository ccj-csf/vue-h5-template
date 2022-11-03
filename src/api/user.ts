import CommonApi from './common'

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
