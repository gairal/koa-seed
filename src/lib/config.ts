const {
  APP_NAME = "koa-seed",
  LOG_LEVEL = "info",
  NODE_ENV = "development",
} = process.env;

const IS_DEV = NODE_ENV === "development";
const IS_PROD = NODE_ENV === "production";
const IS_TEST = NODE_ENV === "test";

export const config = {
  appName: APP_NAME,
  env: NODE_ENV,
  isDev: IS_DEV,
  isProd: IS_PROD,
  isTest: IS_TEST,
  logger: {
    level: LOG_LEVEL,
  },
  port: 3000,
};
