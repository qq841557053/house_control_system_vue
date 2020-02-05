# house_control_system_vue
房屋中介管理系统前端

# 前言
* 本项目是在[vue-elementui-admin](https://github.com/PanJiaChen/vue-element-admin)的版本基础上进行二次开发
* 相关文档可参考 [官方文档](https://panjiachen.github.io/vue-element-admin-site/zh/)

# 启动步骤
* 进入到项目目录 打开命令行输入 npm install
* 成功安装依赖 输入 npm run dev

# 页面预览
[房屋中介管理系统](http://housepage.autumnsun.top "点击跳转") 
`http://housepage.autumnsun.top`
`应该还能用一段时间 不知道什么时候会挂掉`
* 默认账号 qianhuazheng 默认密码 123456 权限 user(顾客)
* 默认账号 zhangxiaoyu 默认密码 123456 权限 seller(房东)

[后端连接](https://github.com/qq841557053/house_control_system_springboot "https://github.com/qq841557053/house_control_system_springboot") 
`https://github.com/qq841557053/house_control_system_vue`

# 前端模块

* 登录功能
* 登出功能

* 首页展示
    * 个人信息展示
    * 最火房源
    * 最近成交金额

* 用户管理
    * 用户新增
    * 用户查看
    * 用户修改信息
    * 用户删除
* 房源查看
    * 求租房源
    * 在租房源
* 发布订单
    * 我是房东
    * 我是房客
* 我的
    * 我买的
    * 我卖的
    * 售后单
* 售后服务

# 路由权限规定
下表表示每个页面对应的角色

|模块|	页面/路由	|角色|
|-----|-----|-----|
|首页展示	|首页展示	|user/seller/admin/yechrom|
|用户管理	|用户新增	|admin/yechrom|
|	|用户查看|	admin/yechrom|
|房源查看	|在租房源|	user/seller/yechrom|
|	|求租房源|	user/seller/yechrom|
|发布订单|	我是房东|	seller/yechrom|
|	|我是顾客|	user/yechrom|
|售后服务|	提交售后单	|user/yechrom|
|我的|	我买的|	user/yechrom|
|	|我卖的|	seller/yechrom|
|	|问题单|	admin/yechrom|
