var express = require('express');
var app = express();

//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


var questions=
    [
        {
            yid: 1,
            yyid: '1',
            yname: '首页',
            ylist: [],
            yrouterul: '/'
        },
        {
            yid: 2,
            yyid: '2',
            yname: '关于我们',
            ylist: [],
            yrouterul: '/about'
        },
        {
            yid: 3,
            yyid: '3',
            yname: '解决方案',
            yrouterul: '/solution',
            ylist: [{
                eid: 31,
                eeid: '3-1',
                ename: '数据中心迁移解决方案',
                elist: [{
                    sid: 311,
                    ssid: '3-1-1',
                    sname: '数据中心迁移解决方案一',
                    slist: []
                }, {
                    sid: 312,
                    ssid: '3-1-2',
                    sname: '数据中心迁移解决方案二',
                    slist: []
                }, {
                    sid: 313,
                    ssid: '3-1-3',
                    sname: '数据中心解决方案三',
                    slist: []
                }]
            }, {
                eid: 32,
                eeid: '3-2',
                ename: 'Microsoft企业应用',
                elist: []
            },
                {
                    eid: 33,
                    eeid: '3-3',
                    ename: '储存备份',
                    elist: []
                },
                {
                    eid: 34,
                    eeid: '3-4',
                    ename: '区块链部署',
                    elist: []
                },
                {
                    eid: 35,
                    eeid: '3-5',
                    ename: '游戏解决方案',
                    elist: [
                        {
                            sid: 351,
                            ssid: '3-5-1',
                            sname: '游戏解决方案一',
                            slist: []
                        },
                        {
                            sid: 352,
                            ssid: '3-5-2',
                            sname: '游戏解决方案二',
                            slist: []
                        }
                    ]
                },
                {
                    eid: 36,
                    eeid: '3-6',
                    ename: '医疗解决方案',
                    elist: []
                },
                {
                    eid: 37,
                    eeid: '3-7',
                    ename: '音视频解决方案',
                    elist: []
                },
                {
                    eid: 38,
                    eeid: '3-8',
                    ename: '网站建设解决方案',
                    elist: []
                }
            ]
        },
        {
            yid: 4,
            yyid: '4',
            yname: '客户案例',
            ylist: [{
                eid: 41,
                eeid: '4-1',
                ename: '客户案例1',
                elist: [{
                    sid: 411,
                    ssid: '4-1-1',
                    sname: '客户案例11',
                    slist: []
                }]
            },
                {
                    eid: 42,
                    eeid: '4-2',
                    ename: '客户案例2',
                    elist: [{
                        sid: 421,
                        ssid: '4-2-1',
                        sname: '客户案例21',
                        slist: []
                    }]
                },
                {
                    eid: 43,
                    eeid: '4-3',
                    ename: '客户案例3',
                    elist: [{
                        sid: 431,
                        ssid: '4-3-1',
                        sname: '客户案例31',
                        slist: []
                    }]
                }
            ],
            yrouterul: '/customercase'
        },
        {
            yid: 5,
            yyid: '5',
            yname: '新闻资讯',
            ylist: [{
                eid: 51,
                eeid: '5-1',
                ename: '新闻资讯1',
                elist: [{
                    sid: 511,
                    ssid: '5-1-1',
                    sname: '新闻资讯11',
                    slist: []
                }]
            },
                {
                    eid: 52,
                    eeid: '5-2',
                    ename: '新闻资讯2',
                    elist: [{
                        sid: 511,
                        ssid: '5-2-1',
                        sname: '新闻资讯21',
                        slist: []
                    }]
                },
                {
                    eid: 53,
                    eeid: '5-3',
                    ename: '新闻资讯3',
                    elist: [{
                        sid: 533,
                        ssid: '5-3-1',
                        sname: '新闻资讯31',
                        slist: []
                    }]
                }
            ],
            yrouterul: '/newsandinformation'
        },
        {
            yid: 6,
            yyid: '6',
            yname: '联系我们',
            ylist: [],
            yrouterul: '/contactus'
        }
    ]

/* 站长工具
* eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('\\4\\5\\6\\3\\1\\0\\2\\a\\0\\b\\c\\7\\8\\9',13,13,'uff0c|u4e86|u8001|u5751|u516c|u53f8|u592a|u6e9c|u5427|u3002|u54e5|u8d81|u673a'.split('|'),0,{}))
 *
* */

//写个接口123
app.get('/navmenu', function (req, res) {
    res.status(200),
        res.json(questions)
});
//配置服务端口
var server = app.listen(3031, function (){
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
})
