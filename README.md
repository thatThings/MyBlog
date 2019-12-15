# MyBlog

> 一个 Amaze UI + nodejs + MongoDB的博客项目：可以多人共用的博客系统

[**在线预览**](http://www.nanyuanfly.cn:3666/)
---
home
![图片预览](public/home.png)
---
tags
![图片预览](public/tags.png)
---
manage
![图片预览](public/manage.png)
---
charts
![图片预览](public/charts.jpg)
---
typewriting
![图片预览](public/typewriting.gif)
---


## 技术栈
Amaze UI + jQuery + ejs + nodejs + express + mongoose

## 自适应展示

- [x] 前台：主页 + 文章列表 + 分类 + 登录注册  
- [x] 后台：管理员：用户管理 + 分类管理 + 内容管理   用户：个人文章 + 内容管理
- [x] 登录注册， 管理自己的个人博客，查看所有发布的博客



### 目录结构

```js
.
│
└─controller            // 控制模块
  ├─category              // 分类管理模块
  └─content               // 内容管理模块
│
└─public                // 静态文件
  ├─css                 // css
  ├─fonts               // 图标
  ├─img                 // 图片
  └─js                  // js  
│
├─routers               // 路由模块
│
├─schema                // 数据库模型
│
├─views
  ├─admin             // 管理员页面
    ├─category        // 分类管理页面
    ├─content         // 内容管理页面
    └─usr             // 用户管理页面
  │
  └─main              // 公共组件
│ 
├─app.js              //后端入口文件
└─...

```

## 使用这个项目

```bash
git clone https://github.com/thatThings/MyBlog.git

## 安装依赖以及开启开发模式
npm install 

## 启动node服务要先安装mongodb数据库,然后
node app.js

```
