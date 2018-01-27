##jquery
 按装jquery的类型描述文件：npm install @types/jquery --save-dev
   装bootstrap: npm install @types/bootstrap --save-dev
##安装angular4.0以上
首先，确定安装了nodejs与npm，angular 5要求node版本在6.9.x以上、npm版本在 3.x.x以上；
  
 > 1、安装@angular/cli
  npm install -g @angular/cli
 > 2、新建第一个项目
  ng new my-app
 > 3、启动服务
  cd my-app
  ng serve --open
  此时，浏览器会打开http://localhost:4200/，即可看到应用；
  还可以加上参数：
  ng serve --open
  
  使用--open（或-o）参数可以自动打开浏览器并访问http://localhost:4200/
新建组件
ng g component component-name

g是generate的缩写 还可以创建其他文件：
// 创建类  
ng g class class-name   
// 创建指令  
ng g directive directive-name   
// 创建模块  
ng g module module-name   
// 创建管道  
ng g pipe pipe-name   
// 创建服务  
ng g service service-name

启动测试
ng test

编译项目
ng build


学习指南：https://www.angular.cn/tutorial/toh-pt4
