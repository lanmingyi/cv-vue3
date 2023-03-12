import { request } from "@/utils/service"
import type * as Login from "./types/login"

/** 获取登录验证码 */
export function getLoginCodeApi(param: any) {
  let url = `/sys/randomImage/${param}`
  return request<Login.LoginCodeResponseData>({
    url: url,
    method: "get",
  })
}

/** 登录并返回 Token 、用户信息、部门、字典*/
export function loginApi(data: Login.ILoginRequestData) {
  return request<Login.LoginResponseData>({
    url: "sys/login",
    method: "post",
    data
  })
}
/** 获取用户详情 */
export function getUserInfoApi() {
  return request<Login.UserInfoResponseData>({
    url: "sys/permission/getUserPermissionByToken",
    method: "get"
  })
}
