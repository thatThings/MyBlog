# MyBlog

> 一个 Amaze UI + nodejs + MongoDB的博客项目：可以多人共用的博客系统
---
[**在线预览**](http://www.nanyuanfly.cn:3666/)
---
**PC端主页**
---
![image.png](https://upload-images.jianshu.io/upload_images/15171164-1bc8924dcc443d06.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
---
**移动端主页**
---
![image.png](https://upload-images.jianshu.io/upload_images/15171164-cbc6a2fdadd43de6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
---



## 技术栈
Amaze UI + jQuery + ejs + nodejs + express + mongoose

## 自适应展示

- [x] 前台：主页 + 文章列表 + 分类 + 登录注册  
- [x] 后台：管理员：用户管理 + 分类管理 + 内容管理   用户：个人文章 + 内容管理
- [x] 登录注册，用户：管理自己的个人博客，查看所有发布的博客； 管理员：查看所有用户，管理分类，管理所有内容



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
└─views
  └─admin             // 管理员页面
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

## 启动node服务前要先安装mongodb数据库,然后配置好数据集，最后
node app.js

```
