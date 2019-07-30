export interface Mysql {
  host: string;
  user: string;
  password: string;
  database: string;
  prot?: number;
  insecureAuth?: boolean;
}
export interface MysqlPool {
  connectionLimit: number;
  host: string;
  user: string;
  password: string;
  database: string;
}
export interface ConfigType {
  mysql: Mysql;
  mysqlPool: MysqlPool;
  rootdir: string;
  imagedir: string;
  url: string;
}
