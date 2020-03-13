该效果实现方式 三种

- 使用背景图片
- 使用图标字体
- 使用 after 和 before 伪类

1. 空链接，避免产生链接的效果 <a href='javascript:;' ></a>

2. 启用 Sass 语法编写 CSS

create-react-app 脚手架中已经添加了 sass-loader 的支持，所以只需要安装 node-sass 插件即可

安装 node-sass 插件

```bash
$ npm install node-sass --save

# 或者
# $ yarn add node-sass
```

3. scss 【\$variable, @mixin, @import】

4. 使用 背景图片 实现的优缺点

- HTML 结构简单
- 兼容性良好，到 ie6 【+hack】

- 使用大量图片，对性能有影响，不易于修改
