
import Koa from 'koa';
import Router from 'koa-router'
import mysql from 'mysql'
import {EnvConfig} from '../config/config.index'
import {AllRouters} from './routes/router';
// console.log(EnvConfig)
// const connection = mysql.createConnection(EnvConfig.mysql)

// connection.connect((err)=>{
    //     if(err){
        //         console.error ('error connecting:' + err.stack)
        //         return
        //     }
        
        //     console.log('connected as id '+connection.threadId)
        // });
        
        // connection.query('select * from user',function(err,result,fields){
            // })
            

const app = new Koa();
app.use(AllRouters())

// const router = new Router({prefix:'/hehe'})

// router.get('/', async(ctx,next) => {
//     ctx.body = 'this is user'
// })


app.listen(3000);

