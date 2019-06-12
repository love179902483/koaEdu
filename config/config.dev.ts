
import {Mysql,ConfigType} from './config.type'


const mysql:Mysql ={
    host:'192.168.1.92',
    user:'root',
    password:'123456',
    database:'testMsql',
    insecureAuth : true
}



const Config:ConfigType = {
    mysql
}

export {Config}




