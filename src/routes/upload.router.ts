import Router from "koa-router";
import {
  UploadImgController,
  UploadCkeditorImageController
} from "$/controller/upload/uploadimg.controller";
import { edu_ReturnNormal } from "$/global/global";
import koaBody from "koa-body";
import Koa from "koa";
import path from "path";
import { EnvConfig } from "config/config.index";
import fs from "fs";

const router = new Router({ prefix: "/upload" });

router.post("/image", koaBody({ multipart: true }), async (ctx, next) => {
  const returnMsg: edu_ReturnNormal<string> = await UploadImgController(
    ctx,
    next
  );
  ctx.body = returnMsg;

  console.log(`返回结果${returnMsg.data}`);
  //   next();
});

router.post("/ckeditor/image", async (ctx: Koa.Context, next: Function) => {
  // console.log(ctx.request.body.files)
  await UploadCkeditorImageController(ctx, next);
  // ctx.body = "test ok!";
  //   next();
});

export { router };
