//导入 http 内部模板
const http = require('http')
//这个核心模块，能够帮我们解析 url 地址，从而拿到 pathname query
const urlModule = require('url');   
//创建一个http服务器
const server = http.createServer()
//监听服务器上的request请求
server.on('request',function(req,res){

        // const url = req.url
        const { pathname: url, query } = urlModule.parse(req.url,true)
        
        if(url === '/getScript'){
            var data = {
                name:'xxk',
                age:'18',
                gender:'女孩子'
            }
            
            //var scriptStr = 'show()';
            var scriptStr = `${query.callback}(${JSON.stringify(data)})`;
            res.end(scriptStr);
        }else{
            res.end('404')
        }
})

server.listen(3000,function(){
    console.log('server listen at http://192.168.1.143:3000');
    
})