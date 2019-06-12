import Router from 'koa-router';

const router = new Router({prefix:'/home'})

router.get('/', async(ctx,next) => {
    ctx.body = 'this is home'
})

export { router } 