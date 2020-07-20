# package 示例

## 概述

1. package 模板
2. 技术栈：react+TS+antd
3. 打包编译工具：webpack

## 开发

初始化

`npm install`

启动项目

`npm run start`

编译项目

`npm run dev`

`npm run build`

## 发布项目

1. 更新 package.json 中的版本号
2. git 代码提交（add -> commit -> push）
3. 查看 npm 源，是官方源，则跳过第三步

`npm config get registry`

3. 切换到 npm 官方源

`npm config set registry=http://registry.npmjs.org`

4. 发布

`npm publish`

> 1. 如果没有登录的话，要 `npm login`登录一下。
> 2. 发布前要 `npm run build`打包编译一下，该项目在 package.json 添加了 `"prepublish": "yarn run build"`，执行`npm publish`的时候会去执行编译命令，所以不需要手动去`build`。
