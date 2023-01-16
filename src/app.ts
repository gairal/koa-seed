import Koa from "koa";
import cors from "@koa/cors";
import compress from "koa-compress";
import bodyParser from "koa-bodyparser";

import { RegisterRoutes } from "../routes";

const createApp = () => {
  const app = new Koa();

  app.use(cors());
  app.use(compress());
  app.use(bodyParser());

  // Routing
  RegisterRoutes(app);

  return app;
};

export const app = createApp();
