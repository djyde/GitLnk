request = require('request');

var getDate = function(url,callback){
    request(url,function(err,res,body){
        callback(err,res,body)
    })
}

var Gitlnk = function(){
}

Gitlnk.prototype.starsCount = function(url,callback){
    var repoURL = 'https://api.github.com/repos/' + url.split('/')[3] + '/' + url.split('/')[4];
    getDate(repoURL,function(err,res,body){
        callback(err,res,JSON.parse(body)['watchers_count'])
    })
}

Gitlnk.prototype.forksCount = function(url,callback){
    var repoURL = 'https://api.github.com/repos/' + url.split('/')[3] + '/' + url.split('/')[4];
    getDate(repoURL,function(err,res,body){
        callback(err,res,JSON.parse(body)['forks_count'])
    })
}

Gitlnk.prototype.gravatarId = function(url,callback){
    var repoURL = 'https://api.github.com/repos/' + url.split('/')[3] + '/' + url.split('/')[4];
    getDate(repoURL,function(err,res,body){
        callback(err,res,JSON.parse(body)['owner']['gravatar_id'])
    })
}

Gitlnk.prototype.repoHomepage = function(url,callback){
    var repoURL = 'https://api.github.com/repos/' + url.split('/')[3] + '/' + url.split('/')[4];
    getDate(repoURL,function(err,res,body){
        callback(err,res,JSON.parse(body)['homepage'])
    })
}

Gitlnk.prototype.language = function(url,callback){
    var repoURL = 'https://api.github.com/repos/' + url.split('/')[3] + '/' + url.split('/')[4];
    getDate(repoURL,function(err,res,body){
        callback(err,res,JSON.parse(body)['language'])
    })
}

module.exports = new Gitlnk;