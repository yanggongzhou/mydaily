//koa2-request中间件请求
const koaRequest = require('koa2-request')               //koa封装的请求第三方接口的方法
var resData = {
    token: '6caad2f73e5977948de7937af924cca7',
    start: 0,
    count: 10
}
module.exports = function () {
    return async function (ctx,next) {
        //koa封装的请求第三方接口的方法(koa2-request)
        let res = await koaRequest({
            url: 'http://api.douban.com/v2/movie/top250',
            method: 'get',
            qs: {
                start: 25,
                count: 2
            }
        });
        // let res = await koaRequest('http://api.douban.com/v2/movie/subject/26942674');
        let res1 = await koaRequest({
            url: 'localhost:3030/test',
            method: 'post',
            form: resData
        })
        console.log(JSON.parse(res.body),JSON.parse(res1.body))
        await next()
    }
}




////node原生request请求
// const koaReq     = require('request')                       //node封装的请求中间件
// // node封装的请求中间件http请求
// var resData = {
//     token: '6caad2f73e5977948de7937af924cca7',
//     start: 0,
//     count: 10
// }
// module.exports = function () {
//     return async function (ctx,next) {
//         // node封装的请求中间件GET请求
//         // await koaReq('http://api.douban.com/v2/movie/top250?start=25&count=2', function (error, response, body) {
//         //     if (!error && response.statusCode == 200) {
//         //         console.log(JSON.parse(body))
//         //     }
//         // })
//         await koaReq({
//             method: 'get',
//             uri: 'http://api.douban.com/v2/movie/top250',
//             qs: {
//                 start: 25,
//                 count: 2
//             },
//             json: true//设置返回的数据为json
//         },function (error, response, body) {
//             if (!error && response.statusCode == 200) {
//                 console.log(body)
//             }
//         })
//         //node封装的请求中间件POST请求(request)
//         await koaReq({
//                 url: 'http://rental.heyhat.cn/agentOrder/user_info_list',
//                 method: 'post',
//                 form: resData,
//                 json: true//设置返回的数据为json
//             },
//             function (err,res,body) {
//                 if (!err && res.statusCode == 200) {
//                     console.log(body)
//                 }
//             })
//         await next()
//     }
// }