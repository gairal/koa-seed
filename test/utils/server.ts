import type { Server } from "node:http";

import { afterAll, beforeAll } from "vitest";
import { app } from "../../src/app";

// eslint-disable-next-line import/no-mutable-exports
export let server: Server;

beforeAll(() => {
  server = app.listen(8888);
});

afterAll(() => {
  server.close();
});
