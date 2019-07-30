import { edu_ReturnCkeditorImage } from "./upload/ckeditor";
export declare interface RS256Keys {
  privateKey: Buffer;
  publicKey: Buffer;
}

//此为返回给客户端的token数据格式
export declare interface edu_UserToken {
  token: string;
  username: string;
}
//此为用户的整体信息
export declare interface edu_UserInfo {
  username: string;
  people_name: string;
  phone: string;
  people_sex: string;
  people_grade: number;
  people_class: string;
  school_id: string;
  student_id: string;
}

//返回给前端的数据结构
export declare interface edu_Return_UserInfo_backup<S, R> {
  [key: string]: S | R;
}
//返回给前端的数据结构
export declare interface edu_Return_UserInfo<S, R, Z> {
  [key: string]: S | R | Z;
}

//定义返回数据类型
export declare interface edu_Return<S>{
  flag:boolean;
  message?:string;
  data:S
}

export declare namespace edu_global {
  export const RS256Keys: RS256Keys;
}

export declare interface edu_ReturnCkeditorImage {
  uploaded: number;
  fileName: string;
  url: string;
}
