# webpack4
## 安装webpack
    1.初始化项目：npm init
    2.npm install webpack webpack-cli --save-dev
## 加载css
  1.安装css loader：npm install css-loader style-loader --save-dev  
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
1.安装sass loader：npm install node-sass sass-loader --save-dev  
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
file-loader 和 url-loader 可以接收并加载任何文件(html-loader)  
1.npm install --save-dev file-loader url-loader  
## 加载数据（ CSV、TSV 和 XML，json是默认）
1.npm install --save-dev csv-loader xml-loader  