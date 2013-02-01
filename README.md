GitLnk
======

根据Github仓库的URL获取仓库的各种信息.

## Installation

```
npm install GitLnk
```

## Quick Start

下面以获取 ***joyent/node*** 仓库的fork数量为例:

```javascript
var gitlnk = require('../GitLnk');
var fetcher = new gitlnk();

fetcher.forksCount('https://github.com/joyent/node',function(err,response,result){
  if(!err && response.statusCode == 200){
    console.log(result) // 输出watcher的数量    
  }else{
    console.log(err) // 输出错误信息
  }
}
```

## APIs
