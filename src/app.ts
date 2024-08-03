import cors from "@koa/cors";
import Koa from "koa";
import bodyParser from "koa-bodyparser";
import compress from "koa-compress";

import { healthz } from "./api";

const createApp = () => {
  const app = new Koa();

  app.use(cors());
  app.use(compress());
  app.use(bodyParser());

  // Routing
  app.use(healthz);

  return app;
};

export const app = createApp();
