import Router from "@koa/router";

import { HealthzError } from "./errors";

const router = new Router();

router.get("/healthz", (ctx) => {
  ctx.status = 200;

  throw new HealthzError("test");
});

export const healthz = router.routes();
