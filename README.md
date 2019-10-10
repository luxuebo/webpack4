# webpack4
## 安装webpack
    1.初始化项目：npm init
    2.npm install webpack webpack-cli --save-dev
## 加载css
  1.安装css loader  
  ```
  npm install css-loader style-loader --save-dev  
  ```
  2.配置rules：
  ```
  {
    test: /\.css$/,
    use: [
        'style-loader',
        'css-loader'
    ]
  }
  ```
## 使用sass
1.安装sass loader  
```
npm install node-sass sass-loader --save-dev
```  
2.配置rules:
```
 {  
    test: /\.scss$/,  
    use: [
        'style-loader',
        'css-loader',
        'sass-loader'
    ]
}
```
## 加载图片，字体
1.file-loader 和 url-loader 可以接收并加载任何文件(html-loader)  
```  
npm install --save-dev file-loader url-loader 
```
2.在html中引入文件(图片) 
```
npm install html-withimg-loader --save-dev
```
## 加载数据（ CSV、TSV 和 XML，json是默认）
```
npm install --save-dev csv-loader xml-loader  
```
## 打包html 插件
```
npm install --save-dev html-webpack-plugin
```
## 本地服务
```
npm i -D webpack-dev-server
```
## 抽离css插件
```
npm mini-css-extract-plugin -D
```
## css添加厂商前缀插件
```
npm i -D postcss-loader autoprefixer  
根目录下创建postcss.config.js 添加plugins: [require('autoprefixer')]
``` 
## 压缩css插件(会覆盖js的压缩,还需terser-webpack-plugin来压缩js)
```
npm install -D optimize-css-assets-webpack-plugin
webpack.config.js中添加优化项
optimization: {
  minimizer: [ new TerserJSPlugin({}),new OptimizeCSSAssetsPlugin({})]
}
```
## babel
```
npm i D babel-loader @babel/core @babel/preset-env
```
## balel 插件(支持js高级语法)
```
npm install --save-dev @babel/plugin-proposal-class-properties //支持类
npm i -D @babel/plugin-proposal-decorators

npm install --save-dev @babel/plugin-transform-runtime//支持generator函数等
npm install --save @babel/runtime
```
## eslint 
```
1.npm install --save-dev eslint eslint-loader  
2.根目录下创建.eslintrc.json 文件,设置规则
```
## 全局变量
```
1.暴露到window  
npm install --save expose-loader 
2.注入到每一个模块
new webpack.ProvidePlugin({
  $:'jquery'
})
3.外部引入,不打包
externals:{
  jquery:'$'
},
```
## source-map
```
devtool:'source-map';//产生单独的文件,如果出错显示出错的源码位置
devtool:'eval-source-map';//不产生单独的文件,如果出错显示出错的源码位置
```
## 打包之前清除文件夹(plugin)
```
npm install clean-webpack-plugin -D
```
## 复制文佳夹到打包目录中
```
npm install copy-webpack-plugin -D
```
## 多页应用抽离公共代码
optimization.splitChunks  
注意name属性必填,在HtmlWebpackPlugin的chunks数组中按照需要的顺序加入,打包后的html中才会引入抽离出来的js文件,并且是按照chunks数组中的顺序依次引入.
