import { edu_global, edu_Return, edu_ReturnNormal } from "../../global/global";
import {
  UploadImgService,
  UploadCkeditorImage
} from "$/service/upload/uploadimg.service";
import { school_sql_type } from "$/global/schoolmanage/schoolmanage.type";
import Koa from "koa";
import fs from "fs";
import path from "path";
import { EnvConfig } from "config/config.index";
import { edu_ReturnCkeditorImage } from "$/global/global";

async function UploadImgController(
  ctx: Koa.Context,
  next: Function
): Promise<edu_ReturnNormal<string>> {
  // const token = jwt.sign({foo:'bar'},'shhh');

  let returnMsg: edu_ReturnNormal<string> = {
    flag: false,
    message: "",
    data: ""
  };
  try {
    const base64: string = ctx.request.body.image;
    const imageName: string = ctx.request.body.name;
    console.log(`传入图片${imageName}`);
    if (base64.indexOf("data:image") !== -1) {
      let returnData: string = await UploadImgService(base64, imageName);
      returnMsg.flag = true;
      returnMsg.data = returnData;
    } else {
      returnMsg.message = "传入的数据有误,必须是image的数据！";
    }
  } catch (error) {
    ctx.throw(401, error);
  }

  return returnMsg;
}

async function UploadCkeditorImageController(
  ctx: Koa.Context,
  next: Function
) {
  const files = ctx.request.files;
  var file: any;
  if (files && files.hasOwnProperty("upload")) {
    file = files.upload;
  } else {
  }

  //获取流写入的最后结果
  const getImageResult: edu_ReturnNormal<
    edu_ReturnCkeditorImage
  > = await UploadCkeditorImage(file);
  if(getImageResult.flag === true){
    ctx.body = getImageResult.data
  }else{
    next('上传失败！')
  }
}

export { UploadImgController,UploadCkeditorImageController };
