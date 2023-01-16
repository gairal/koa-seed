import Koa from "koa";
import cors from "@koa/cors";
import compress from "koa-compress";
import bodyParser from "koa-bodyparser";
import Router from "@koa/router";

import { RegisterRoutes } from "../routes";

const createApp = () => {
  const app = new Koa();

  app.use(cors());
  app.use(compress());
  app.use(bodyParser());

  // Routing
  const router = new Router();
  RegisterRoutes(router);
  app.use(router.routes()).use(router.allowedMethods());

  return app;
};

export const app = createApp();
