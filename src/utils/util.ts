class Util {
  /**
   * @description 字符串布尔值转布尔
   * @params envName 任意类型
   */
  static convertToBoolean = (envName: any) => {
    return (envName = envName === 'true' ? true : envName === 'false' ? false : envName)
  }
}
export default Util
