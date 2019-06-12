
import {Mysql,ConfigType} from './config.type'

//mysql config
const mysql:Mysql ={
    host:'192.168.1.92',
    user:'root',
    password:'123456',
    database:'testMsql'
}



const Config:ConfigType = {
    mysql
}

export {Config}




