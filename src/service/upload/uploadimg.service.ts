import { QueryPool } from "$/global/mysql/mysql";
import {
  edu_global,
  edu_ReturnCkeditorImage,
  edu_ReturnNormal
} from "$/global/global";
import { edu_Return } from "$/global/global";
import { school_sql_type } from "$/global/schoolmanage/schoolmanage.type";
import { EnvConfig } from "config/config.index";
import fs from "fs";
import path from "path";

async function UploadImgService(
  base64: string,
  imageName: string
): Promise<string> {
  let returnMsg: edu_Return<school_sql_type, null> = {
    flag: false,
    message: "",
    data: null
  };

  const base64Data = base64.replace(/^data:image\/\w+;base64,/, "");
  const dataBuffer = new Buffer(base64Data, "base64");
  const result = fs.writeFileSync(
    `${EnvConfig.imagedir}/${imageName}`,
    dataBuffer
  );
  return `http://localhost:3000/images/${imageName}`;
}


//ckeditor 图片的上传
async function UploadCkeditorImage(
  file: any
): Promise<edu_ReturnNormal<edu_ReturnCkeditorImage>> {

  let returnMsg: edu_ReturnNormal<edu_ReturnCkeditorImage> = {
    flag: false,
    message: "",
    data: {
      uploaded: 1,
      fileName: "",
      url: ""
    }
  };

  try {

    //创建读入的流
    const fileReader = fs.createReadStream(file.path);
    //获取图片存放的目录
    const filePath = path.join(EnvConfig.imagedir);
    //拼接最后图片存放的路径
    const fileResource = `${filePath}\\${file.name}`;
    //创建写入的六
    const writeStream = fs.createWriteStream(fileResource);
    //用管道将读入的流放入写入的流中
    fileReader.pipe(writeStream);

    returnMsg.flag = true;
    returnMsg.data.fileName = file.name;
    returnMsg.data.url = `${EnvConfig.url}/images/${file.name}`;

    return returnMsg;
  } catch (error) {
    //读写流失败
    console.error('ckeditor image 读写流的时候失败：',error);
    return returnMsg;
  }
}

export { UploadImgService, UploadCkeditorImage };
