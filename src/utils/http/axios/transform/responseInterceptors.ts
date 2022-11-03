import { AxiosResponse } from 'axios'

/**
 * @description: 响应拦截器处理
 */
export const responseInterceptors = (res: AxiosResponse<any>) => {
  return res
}
