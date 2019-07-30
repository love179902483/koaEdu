import { Mysql, MysqlPool, ConfigType } from "./config.type";
import path from 'path'

const mysql: Mysql = {
  host: "192.168.1.92",
  user: "root",
  password: "123456",
  database: "testMsql",
  insecureAuth: true
};
const mysqlPool: MysqlPool = {
  connectionLimit: 10,
  host: "192.168.1.92",
  user: "root",
  password: "123456",
  database: "testMsql"
};

const Config: ConfigType = {
  mysql,
  mysqlPool,
  rootdir: path.resolve(__dirname,'..'),
  imagedir: path.resolve(__dirname,'..','./src/inventory/images'),
  url:'http://localhost:3000'
};

export { Config };
