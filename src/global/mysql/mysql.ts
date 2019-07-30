import mysql from "mysql";
import { EnvConfig } from "config/config.index";
const pool = mysql.createPool(EnvConfig.mysqlPool);

pool.on("connection", function(connection) {
  connection.query("SET SESSION auto_increment_increment=1");
});

pool.on("enqueue", function() {
  console.log("Waiting for available connection slot");
});

pool.on("release", function(connection) {
  console.log("Connection %d released", connection.threadId);
});

const QueryPool = function(sql: string, value:string|number[]):Promise<any> {
  return new Promise((resolve, reject) => {
    pool.getConnection(function(error, connection) {
      if (error) {
        console.log('数据库链接时候出错！！！')
        reject(error); //链接时候出错
      } else {
        connection.query(sql, value, (error, rows) => {
          if (error) {
            console.log('查询数据库时候出错！！！')
            reject(error);
          } else {
            resolve(rows);
          }
          connection.release();
        });
      }
    });
  });
};

export { QueryPool };
