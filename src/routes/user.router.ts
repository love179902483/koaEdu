import Router from 'koa-router';

const router = new Router({prefix:'/user'})

router.get('/', async(ctx,next) => {
    ctx.body = 'this is user'
})

export { router } 