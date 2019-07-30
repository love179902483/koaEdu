import Koa from "koa";
import mysql from "mysql";
import { EnvConfig } from "../config/config.index";
import { AllRouters } from "./routes/router";
import { edu_global } from "./global/global";
import cors from "@koa/cors";
import bodyparser from "koa-bodyparser";
import koaBody from 'koa-body'
import path from "path";
import koaStatic from "koa-static";
console.log("this is main.ts");

console.log(EnvConfig);
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

//options for cors midddleware

const app = new Koa();
app.use(koaStatic(path.join(__dirname, "./inventory")));
app.use(cors());
app.use(koaBody({multipart:true,formidable:{maxFieldsSize:1000*1024*1024,}}))
app.use(AllRouters());

app.on("error",(err,ctx)=>{
    console.log(new Date(),":",err)
    ctx.body = 'hello error!!!!'
})

// const router = new Router({prefix:'/hehe'})

// router.get('/', async(ctx,next) => {
//     ctx.body = 'this is user'
// })

app.listen(3000);
console.log("http://localhost/3000");
