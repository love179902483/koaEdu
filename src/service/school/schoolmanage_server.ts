import { QueryPool } from "$/global/mysql/mysql";
import { edu_global } from "$/global/global";
import { edu_Return } from "$/global/global";
import { school_sql_type } from "$/global/schoolmanage/schoolmanage.type";

async function getSchoolInfo() :Promise<edu_Return<school_sql_type,null>>{
  let returnMsg: edu_Return<school_sql_type , null> = {
    flag: false,
    message: "",
    data: null
  };
  try {
    let result:school_sql_type[] = await QueryPool("select * from school", "");
    console.log('-------------------------------')
    for(let item of result){
        console.log(item)
    }
  } catch (error) {
    returnMsg.message = JSON.stringify(error);
  }
  return returnMsg;
}

export { getSchoolInfo };
