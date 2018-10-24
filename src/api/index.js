/*
包含n个接口请求函数的模块
 */
import ajax from './ajax'

//1.获取首页数据
export const reqMSite = () => ajax('/home_data');
//2.获取识物数据
export const reqFindThings = () => ajax('/shiwu_data');
//3.获取分类数据
export const reqCategory = () => ajax('/category_data')
