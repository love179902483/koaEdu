import combineRouters from 'koa-combine-routers';
import {router as userRouter} from './user.router';
import {router as homeRouter} from './home.router';
import {router as schoolmanage} from './schoolmanage.router';
import {router as uploadRouter} from './upload.router';

const AllRouters = combineRouters([userRouter,homeRouter,schoolmanage,uploadRouter])

export {AllRouters} ;