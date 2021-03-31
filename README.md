## 相关命令
* 启动VuePress服务器 
```
npm run docs:dev
```
* 编译VuePress静态文件
```
npm run docs:build
```
## Npm插件
* vuepress-plugin-autobar
* https://github.com/boboidream/vuepress-bar
```
npm install -D boboidream/vuepress-bar
```
## VSCode插件
* GitLens
## 搭建VuePress环境
（1）创建项目目录 
```
mkdir tech-stack
```
（2）进入该目录 
```
cd tech-stack
```
（3）项目初始化 
```
npm init
```
（4）安装VuePress 
```
npm install -D vuepress
```
（5）创建第一篇文章 
```
mkdir docs && echo '# Hello VuePress' > docs/README.md
```
（6）在 package.json 中添加一些 scripts
 ```
 {
        "scripts": {
                "docs:dev": "vuepress dev docs",
                "docs:build": "vuepress build docs"
        }
}
```
（7）在本地启动服务器
```
npm run docs:dev
```
（8）VuePress 会启动一个热重载的开发服务器
```html
http://localhost:8080
```