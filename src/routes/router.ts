import combineRouters from 'koa-combine-routers';
import {router as userRouter} from './user.router';
import {router as homeRouter} from './home.router';

const AllRouters = combineRouters([userRouter,homeRouter])

export {AllRouters} ;