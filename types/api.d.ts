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

  /**
   * @description: 数据用户成功返回数据
   */
  type UserInfoResult = {
    roles: RoleInfo[]
    // 用户id
    userId: string | number
    // 用户名
    username: string
    // 真实名字
    realName: string
    // 头像
    avatar: string
    // 介绍
    desc?: string
  }
}
