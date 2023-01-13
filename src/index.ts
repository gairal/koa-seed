import { logger } from "@lib/logger";
import { createApp } from "@src/app";
import { config } from "@src/config";

/**
 * Start the web app.
 */
const server = createApp().listen(config.port, () =>
  logger.info(`✔ Server running on port ${config.port} 🍺`)
);

/**
 * Catch EACCES & EADDRINUSE errors
 */
server.on("error", (error: NodeJS.ErrnoException) => {
  if (error.syscall !== "listen") {
    throw error;
  }

  switch (error.code) {
    case "EACCES":
      logger.error(`Port ${config.port} requires elevated privileges`);
      break;

    case "EADDRINUSE":
      logger.error(`Port ${config.port} is already in use`);
      break;

    default:
      throw error;
  }
  return process.exit(1);
});

/**
 * Listen for termination signals.
 */
process.on("SIGTERM", () => {
  logger.warn("[bin/server#SIGTERM]");
  server.close();
});
process.on("SIGINT", () => {
  logger.warn("[bin/server#SIGINT]");
  server.close();
});
/**
 * Listen for uncaught exceptions.
 */
process.on("uncaughtException", (error) => {
  logger.error("[uncaughtException]", { error });
});
process.on(
  "unhandledRejection",
  (reason: unknown, promise: Promise<unknown>) => {
    promise.catch((error) => {
      logger.error("[unhandledRejection]", { error, reason });
    });
  }
);
