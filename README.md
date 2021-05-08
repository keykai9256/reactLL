create-react-app react-d
npm run eject
### 安装antd-mobile 可选22444444444444
1.npm install antd-mobile --save

2.入口页面 (html 或 模板) 相关设置
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
  <script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
  <script>
    if ('addEventListener' in document) {
      document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
      }, false);
    }
    if(!window.Promise) {
      document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
    }
  </script>

3按需加载
npm install react-app-rewired customize-cra --save-dev
npm install babel-plugin-import --save-dev
npm install --save react-scripts

webpack.config.js文件
babel-loader的options字段下的plugins加入

 [ "import",{libraryName: "antd", style: 'css'}] // antd按需加载

 
ok
ps 使用方式：
import { Button } from 'antd-mobile';

###代理
http-proxy-middleware
https://www.jianshu.com/p/a2a5163fefac 
