import { CreateAxiosOptions } from '../axiosTransform'

/**
 * @description: 请求拦截器处理
 */
export const requestInterceptors = (config: CreateAxiosOptions, options: any) => {
  // 请求之前处理config
  const token = ''
  if (token && (config as Recordable)?.requestOptions?.withToken !== false) {
    // jwt token
    ;(config as Recordable).headers.Authorization = options.authenticationScheme
      ? `${options.authenticationScheme} ${token}`
      : token
  }
  console.log('config-requestInterceptors', config)
  return config
}
