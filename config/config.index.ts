import { Config as devConfig} from './config.dev';
import { Config as uatConfig} from './config.uat';
import {Config as proConfig} from './config.prod';
import {ConfigType } from './config.type';

let EnvConfig:ConfigType

if (process.env.NODE_ENV){
    if (process.env.NODE_ENV === 'production'){
        EnvConfig = proConfig;
    }else if(process.env.NODE_ENV === 'uat'){
        EnvConfig = uatConfig;
    }else {
        process.env.NODE_ENV = 'dev'
        EnvConfig = devConfig
    }
}else{
    process.env.NODE_ENV = 'dev'
    EnvConfig = devConfig
}

console.log(`process.env.NODE_ENV = ${process.env.NODE_ENV}`)

export {EnvConfig}