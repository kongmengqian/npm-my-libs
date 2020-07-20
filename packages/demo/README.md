# package 示例

> [手把手教你搭建一个基于 react+TS+antd 的组件库（1）](https://github.com/kongmengqian/blog/blob/master/articles/%E6%8A%80%E6%9C%AF%E7%B1%BB/npm/%E6%89%8B%E6%8A%8A%E6%89%8B%E6%95%99%E4%BD%A0%E6%90%AD%E5%BB%BA%E4%B8%80%E4%B8%AA%E5%9F%BA%E4%BA%8Ereact+TS+antd%E7%9A%84%E7%BB%84%E4%BB%B6%E5%BA%93%EF%BC%881%EF%BC%89.md)

> [手把手教你搭建一个基于 react+TS+antd 的组件库（2）](<https://github.com/kongmengqian/blog/blob/master/articles/%E6%8A%80%E6%9C%AF%E7%B1%BB/npm/%E6%89%8B%E6%8A%8A%E6%89%8B%E6%95%99%E4%BD%A0%E6%90%AD%E5%BB%BA%E4%B8%80%E4%B8%AA%E5%9F%BA%E4%BA%8Ereact%2BTS%2Bantd%E7%9A%84%E7%BB%84%E4%BB%B6%E5%BA%93(2).md>)

## 概述

1. package 模板
2. 技术栈：react+TS+antd
3. 打包编译工具：webpack
4. 主要用于 npm 包搭建、发布测试和学习，没有实用价值

## 使用

`npm i kongmq-demo`

```js
import App from "kongmq-demo";

const Page = () => {
  return <App />;
};

ReactDOM.render(<Page />, document.getElementById("root"));
```

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
