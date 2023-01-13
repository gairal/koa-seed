import Koa from "koa";
import cors from "@koa/cors";
import compress from "koa-compress";
import bodyParser from "koa-bodyparser";

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
