## 相关命令
* 启动VuePress服务器 
```
npm run docs:dev new
```
* 编译VuePress静态文件
```
npm run docs:build
```
## VSCode安装GitLens插件
* 插件市场搜索安装该插件，用于Git管理
## 搭建Git环境
（1）Git全局设置
        git config --global user.name "ASxx" 
        git config --global user.email "123456789@qq.com"
（2）进入项目目录
        cd tech-stack
（3）Git初期化
        git init
（4）设置远程仓库地址
        git remote add origin https://github.com/microzyw/microzyw.github.io.git
（5）拉取代码
        git pull
（6）提交代码
        git add README.md 
        git commit -m "first commit" 
（7）上传代码
        git push -u origin master
## 搭建VuePress环境
（1）创建项目目录 
        mkdir tech-stack
（2）进入该目录 
        cd tech-stack
（3）项目初始化 
        npm init
（4）安装VuePress 
        npm install -D vuepress
（5）创建第一篇文章 
        mkdir docs && echo '# Hello VuePress' > docs/README.md
（6）在 package.json 中添加一些 scripts
        {
            "scripts": {
                "docs:dev": "vuepress dev docs",
                "docs:build": "vuepress build docs"
            }
        }
（7）在本地启动服务器
        npm run docs:dev
（8）VuePress 会在 http://localhost:8080 启动一个热重载的开发服务器
        http://localhost:8080