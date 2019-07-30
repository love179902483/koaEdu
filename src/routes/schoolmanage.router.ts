import Router from 'koa-router';
import {schoolmanage} from '$/controller/school/school.controller';


const router = new Router({prefix:'/schoolmanage'})

router.get('/', async(ctx,next) => {
    
    ctx.body = await schoolmanage(ctx,next);
})

export { router } 