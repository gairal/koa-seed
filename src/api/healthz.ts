import Router from "@koa/router";

const router = new Router();

router.get("/healthz", (ctx) => {
  ctx.status = 200;
});

export const healthz = router.routes();
