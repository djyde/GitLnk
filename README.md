GitLnk
======

根据Github仓库的URL获取仓库的各种信息.

## Installation

```
npm install GitLnk
```

## Quick Start

下面以获取 ***joyent/node*** 仓库的star数量为例:

```javascript
var gitlnk = require('gitlnk');

gitlnk.starsCount('https://github.com/joyent/node',function(err,response,result){
  if(!err && response.statusCode == 200){
    console.log(result) // 输出star的数量    
  }else{
    console.log(err) // 输出错误信息
  }
}
```

## APIs
GitLnk提供的API格式一致,需要提供两个属性,仓库URL和回调函数.回调函数分别返回错误信息`error`、响应状态`response`、数据`result`,如:

```javascript
gitlnk.starsCount(url,callback(err,response,result){
  // do something....
})
```
------

##### 获取Star数量
```
starsCount(url,callback(err,response,result))
```

##### 获取Fork数量
```
forksCount(url,callback(err,response,result))
```

##### 获取作者gravatar ID:
```
gravatarId(url,callback(err,response,result))
```

##### 获取项目主页
```
homepage(url,callback(err,response,result))
```

##### 获取项目主要语言
```
language(url,callback(err,response,result))
```
