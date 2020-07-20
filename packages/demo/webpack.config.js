const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    index: "./index.tsx",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    library: "MyLibrary",
    libraryTarget: "umd",
    publicPath: "./",
  },
  devtool: process.env.debug ? "cheap-module-source-map" : "none",
  externals: !process.env.debug
    ? ["react", "react-dom"]
    : {
        React: "react",
        ReactDOM: "react-dom",
      },
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.ejs"),
    }),
  ],
  module: {
    rules: [
      // 'transform-runtime' 插件告诉 babel 要引用 runtime 来代替注入。
      {
        test: /\.(tsx|ts)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                // ["@babel/preset-env", { useBuiltIns: "usage" }],
                "@babel/preset-env",
                "@babel/preset-react",
              ],
              plugins: [
                [
                  "import",
                  {
                    libraryName: "antd",
                    // libraryDirectory: "es",
                    style: true, // `style: true` 会加载 less 文件
                  },
                ],
                "@babel/plugin-transform-runtime",
                // https://babeljs.io/docs/en/babel-plugin-proposal-decorators
                // If you are including your plugins manually and using @babel/plugin-proposal-class-properties, make sure that @babel/plugin-proposal-decorators comes before @babel/plugin-proposal-class-properties.

                // When using the legacy: true mode, @babel/plugin-proposal-class-properties must be used in loose mode to support the @babel/plugin-proposal-decorators.
                // [
                //   "@babel/plugin-proposal-decorators",
                //   {
                //     // Use the legacy (stage 1) decorators syntax and behavior.
                //     legacy: true
                //   }
                // ],
                // ["@babel/plugin-proposal-class-properties", { loose: true }]
              ],
            },
          },
          { loader: "ts-loader" },
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                getLocalIdent: (context, _, localName) => {
                  if (context.resourcePath.includes("node_modules")) {
                    return localName;
                  }
                  return `demo__${localName}`;
                },
                // localIdentName: "[path][name]__[local]",
              },
            },
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                // http://lesscss.org/usage/#command-line-usage-options
                javascriptEnabled: true,
                modifyVars: {
                  // "primary-color": "#1DA57A",
                  // "link-color": "#1DA57A",
                  // "border-radius-base": "2px",
                  // or
                  // https://github.com/ant-design/ant-design/blob/d2214589391c8fc8646c3e8ef2c6aa86fcdd02a3/.antd-tools.config.js#L94
                  hack: `true; @import "${require.resolve(
                    "./src/style/ui.config.less"
                  )}";`, // Override with less file
                },
              },
            },
          },
        ],
      },
    ],
  },
  devServer: {
    port: 80,
    publicPath: "/",
    contentBase: "public",
    disableHostCheck: true,
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: "https://接口代理地址",
        pathRewrite: { "^/api": "/" },
        changeOrigin: true, // target是域名的话，需要这个参数，
        secure: false, // 设置支持https协议的代理
      },
    },
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
