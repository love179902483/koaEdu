import { edu_global } from "../../global/global";
import { ServiceLogin } from "$/service/login_server";
import {
  edu_Return_UserInfo,
  edu_UserInfo,
  edu_UserToken
} from "$/global/global.d";

async function login(): Promise<
  edu_Return_UserInfo<edu_UserInfo, edu_UserToken, string>
> {
  console.log(edu_global.RS256Keys);
  // const token = jwt.sign({foo:'bar'},'shhh');

  console.log(ServiceLogin);

  return ServiceLogin();
}

export { login };
