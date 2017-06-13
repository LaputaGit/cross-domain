# cross-domain
利用nodejs去实现跨域原理的学习

# 开始

1、开启node http服务：

    node app.js

在页面中，点击button按钮，即向后端发送一个http请求，可在node打印出来请求的request对象和response对象

2、用本地服务器打开xhr.html
    
    注意：用localhost打开之后，地址替换为127.0.0.1，他们虽然是同样的地址，但是是不同的域

为什么不可以本地xhr.html进行测试？
    
    因为本地打开：file:///Users/huangtao/FELearn/cross-domain/xhr.html
    如上所示，用的是file协议地址，服务器不支持识别
    而建立服务器打开，地址则是http://127.0.0.1:8080/cross-domain/xhr.html
    是http协议，服务器可支持，才能返回


# Tips

