import Util from '@/utils/util'
const isEncrypt = Util.convertToBoolean(import.meta.env.VITE_USE_ENCRYPT)
export default {
  urlPrefix: '',
  publicPath: import.meta.env.VITE_PUBLIC_PATH,
  apiUrl: import.meta.env.VITE_GLOB_API_URL,
  isEncrypt,
}
