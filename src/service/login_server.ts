import jwt from "jsonwebtoken";
import { QueryPool } from "$/global/mysql/mysql";

import {
  edu_UserInfo,
  edu_UserToken,
  edu_Return_UserInfo
} from "$/global/global.d";
import { edu_global } from "$/global/global";

async function ServiceLogin(): Promise<
  edu_Return_UserInfo<edu_UserInfo, edu_UserToken, string>
> {

  let thisUserInfo: edu_UserInfo = {
    username: "2693251345@qq.com",
    people_name: "秦瑶",
    phone: "15135106691",
    people_sex: "0",
    people_grade: 2016,
    people_class: "548",
    school_id: "sxyx001",
    student_id: "G14062220010608984X"
  };
  //登录时候需要的token
  const token = jwt.sign(
    {
      username: "179902483@qq.com",
      student_id: "0921010827"
    },
    edu_global.RS256Keys.privateKey,
    { algorithm: "RS256" }
  );

  let thisUserToken: edu_UserToken = {
    username: "2693251345@qq.com",
    token: token
  };

  let returnUserInfo: edu_Return_UserInfo<
    edu_UserInfo,
    edu_UserToken,
    string
  > = {
    token: thisUserToken,
    userInfo: thisUserInfo,
    message: "用户名密码正确"
  };

  console.log(returnUserInfo);

  return returnUserInfo;
}

export { ServiceLogin };
