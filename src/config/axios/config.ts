const config: {
  base_url: {
    development: string
    production: string
    // test: string
  }
  result_code: number | string
  default_headers: AxiosHeaders
  request_timeout: number
} = {
  /**
   * api请求基础路径
   */
  base_url: {
    // 打包开发环境接口前缀
    development: '',

    // 打包生产环境接口前缀
    production: '',

    // 打包测试环境接口前缀
    // test: ''
  },

  /**
   * 接口成功返回状态码
   */
  result_code: '0000',

  /**
   * 接口请求超时时间
   */
  request_timeout: 60000,

  /**
   * 默认接口请求类型
   * 可选值：application/x-www-form-urlencoded multipart/form-data
   */
  default_headers: 'application/json'
}

export { config }
