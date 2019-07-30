import { edu_global, edu_Return } from "../../global/global";
import { getSchoolInfo } from "$/service/school/schoolmanage_server";
import {school_sql_type} from '$/global/schoolmanage/schoolmanage.type'
import Koa from 'koa'

async function schoolmanage(ctx:Koa.Context,next:Function): Promise<edu_Return<school_sql_type,null>> {
    // const token = jwt.sign({foo:'bar'},'shhh');

    let schoolInfo =  await getSchoolInfo()
    if (schoolInfo.flag === false){
        next(schoolInfo.message)
    }
    console.log('如果 flag === false 则这个不应该执行')
    return schoolInfo;
}

export { schoolmanage };
