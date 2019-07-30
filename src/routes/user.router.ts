import Router from 'koa-router';
import {login} from '$/controller/user/login'

const router = new Router({prefix:'/user'})

router.get('/login', async(ctx,next) => {

    ctx.body = await login()
    next()
})

export { router } 