# npm-my-libs

> [手把手教你搭建一个基于 react+TS+antd 的组件库（1）](https://github.com/kongmengqian/blog/blob/master/articles/%E6%8A%80%E6%9C%AF%E7%B1%BB/npm/%E6%89%8B%E6%8A%8A%E6%89%8B%E6%95%99%E4%BD%A0%E6%90%AD%E5%BB%BA%E4%B8%80%E4%B8%AA%E5%9F%BA%E4%BA%8Ereact+TS+antd%E7%9A%84%E7%BB%84%E4%BB%B6%E5%BA%93%EF%BC%881%EF%BC%89.md)

> [手把手教你搭建一个基于 react+TS+antd 的组件库（2）](<https://github.com/kongmengqian/blog/blob/master/articles/%E6%8A%80%E6%9C%AF%E7%B1%BB/npm/%E6%89%8B%E6%8A%8A%E6%89%8B%E6%95%99%E4%BD%A0%E6%90%AD%E5%BB%BA%E4%B8%80%E4%B8%AA%E5%9F%BA%E4%BA%8Ereact%2BTS%2Bantd%E7%9A%84%E7%BB%84%E4%BB%B6%E5%BA%93(2).md>)

## 概述

npm 库搭建模板

1. 使用 lerna 进行多包管理
2. packages 目录下是可以建立多个包文件夹

## 目录结构

```
├─.gitignore
├─lerna.json
├─package-lock.json
├─package.json
├─README.md
├─yarn.lock
├─packages --------------------------------- 存放包的地方
|    ├─demo -------------------------------- 包的一个示例
|    |  ├─.gitignore
|    |  ├─global.d.ts
|    |  ├─index.tsx ------------------------ 包入口文件
|    |  ├─app.tsx -------------------------- 本地开发时的入口文件
|    |  ├─package-lock.json
|    |  ├─package.json
|    |  ├─tsconfig.json ------------------- ts配置文件
|    |  ├─webpack.config.js --------------- webpack配置文件
|    |  ├─yarn.lock
|    |  ├─test ---------------------------- 测试代码
|    |  ├─src ----------------------------- 核心代码
|    |  |  ├─a.tsx
|    |  |  ├─style ------------------------ 样式
|    |  |  |   ├─a.less
|    |  |  |   └ui.config.less
|    |  ├─public -------------------------- 静态文件
|    |  |   └index.ejs
|    |  ├─examples ------------------------ 如何使用包的示例代码
```

## 开发

全局安装 lerna

`npm i lerna -g`

安装所有的包的依赖文件

`npx lerna bootstrap`

运行

`npm run start:demo`

编译

`npm run dev:demo`

`npm run build:demo`

## 包使用说明

1. 安装对应的包到指定的目录：

   `lerna add react --scope=kongmq-demo`

2. 删除包

   ```
   npm unpublish [<@scope>/]<pkg>@<version> // 删除某个版本的包
   npm unpublish [<@scope>/]<pkg> --force // 删除整个包
   ```

## 新建 package

```
mkdir packages/package-name
cd package-name
npm init
```

## 发布

1. git 代码提交（add -> commit -> push）
2. 执行发布命令

   `lerna publish`
