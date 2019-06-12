

export interface Mysql {
    host:string,
    user:string,
    password:string,
    database:string,
    prot?:number,
    insecureAuth?:boolean
}
export interface ConfigType {
    mysql:Mysql
}