# Vue2 Framework
>该框架基于Vue2.0 + vue-route  +webpack 搭建，作为脚手架的处理，用于快速搭建框架进行开发。

# 技术点
* 文件和应用组织：Vue2
* 构建系统：webpack
* 测试系统：暂无（Karma、Jasmine）

# 快速开始
**确保 Node的版本>=5.0 且 Npm的版本>=3**
>克隆/下载仓库,然后编辑 `main.js` 里面的 [`/src/main.js`](/src/main.js)

```bash
# 克隆我的仓库
# --depth 1 removes all but one .git commit history
git clone --depth 1 https://github.com/jianxuanbing/VueFramework.git

# 更改我们的仓库目录
cd VueFramework

# 安装仓库中的npm的配置信息
npm install
npm install [name] -g
npm install [name] --save
npm install [name] --save-dev

# 如因墙的原因可使用cnpm进行安装
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install
cnpm install [name]

# 启动服务器
npm start
```
前往 [http://0.0.0.0:8991](http://0.0.0.0:8991) 或者 [http://localhost:8991](http://localhost:8991) 进行浏览

# 目录
* [文件结构](#文件结构)
* [入门指南](#getting-started)
    * [依赖关系](#dependencies)
    * [安装](#installing)
    * [运行应用程序](#running-the-app)
* [配置](#configuration)
* [贡献](#contributing)
* [@Types](#types)
* [常见问题](#frequently-asked-questions)
* [支持、问题或反馈](#support-questions-or-feedback)
* [许可证](#license)
* [参考文献](#reference)

# 文件结构
我们使用组件的方式启动。这是开发Vue应用程序的新标准，以确保我们的行为逻辑的可维护的代码封装。如下面文件目录：
```
ng2Framework/
 ├──build/                     * 存放构建文件:目录
 |   ├──build.js               * 生成文件
 |   ├──dev-client.js          * 开发客户端用于热加载
 |   ├──dev-server.js          * 开发服务端，启用网站
 |   ├──utils.js               * 工具类，用于加载自定义的加载器
 |   ├──webpack.base.conf.js   * webpack 基本配置，用于继承
 |   ├──webpack.dev.conf.js    * webpack 开发配置，用于开发，临时打包
 |   └──webpack.prod.conf.js   * webpack 产品配置，用于发布时，打包使用
 |
 ├──config/                    * 存放配置文件:目录
 |   ├──index.js               * 基本路径信息
 │   ├──dev.env.js             * webpack 开发环境配置
 │   ├──prod.env.js            * webpack 生产环境配置
 │   └──test.env.js            * webpack 测试环境配置
 │
 ├──dist/                      * 生成文件:目录
 ├──src/                       * 源文件:目录
 │   ├──assets/                * 静态资源:目录
 │   │   ├──css/               * 通用样式文件:目录
 │   │   ├──images/            * 图片文件:目录
 │   |   ├──fonts/             * 字体文件:目录
 │   │   └──icon/              * 图标:目录
 │   │
 |   ├──components/            * 自定义组件:目录
 |   ├──views/                 * 视图:目录 组装组件成一个视图
 |   ├──App.vue                * App.vue:根应用程序组件
 |   ├──index.html             * 索引页，用于生成索引页面
 |   ├──main.js                * 应用程序入口文件，定义Vue以及路由
 |   ├──route-config.js        * Vue-route 路由配置
 |   ├──test.html              * 测试索引页，用于生成索引页面
 |   └──test.js                * 测试应用程序入口文件，定义Vue以及路由
 │
 ├──static/                    * 通用静态资源文件:目录
 │   ├──css/                   * 通用样式文件:目录
 │   ├──images/                * 图片文件:目录
 │   ├──fonts/                 * 字体文件:目录
 │   └──icon/                  * 图标:目录
 |
 |──.babelrc                   * babel 配置
 |──.editorconfig              * 编辑配置
 |──.eslintignore              * eslint 的忽略配置
 |──.eslintrc.js               * eslint 的规则
 ├──package.json               * 搭建环境需要的npm依赖项
 └──config.js                  * webpack 生成配置
```
# 入门指南
## 依赖关系
你需要运行这个程序：
* `node` 和 `npm` (`brew install node`)
* 确保你运行最新版本的 Node `v4.x.x`+ (或 `v5.x.x`) 和 NPM `3.x.x`+

> 如果你安装了 `nvm` ，强烈推荐(`brew install node`) 你能执行 `nvm install --lts && nvm use` 在 `$` 运行最新的Node。

一旦你有了这些，你应该安装这些全局变量 `npm install --global`：
* `webpack` (`npm install --global webpack`)
* `webpack-dev-server` (`npm install --global webpack-dev-server`)

## 安装
* `fork` 分支仓库
* `clone` 克隆仓库
* `npm install webpack-dev-server -g` 安装必须的全局依赖关系
* `npm install` 安装所有依赖
* `npm run server` 启动开发服务器

## 运行应用程序
在您安装所有的依赖项后，现在可以运行应用程序。
运行 `npm run server` 命令启动本地服务使用 `webpack-dev-server` ，构建在内存当中。
服务地址默认为：`http://0.0.0.0:9060`(或如果你喜欢IPV6，你可以使用 `express` 服务器，那么地址为：`http://[::1]:9060/`)。

### 服务器
```bash
# 开发环境
npm run server

# 生产环境
npm run build:prod
npm run server:prod
```

# 配置

# 贡献

# @Types

# 常见问题

# 支持、问题或反馈

# 许可证

# 参考文献