import request from "supertest";

import { server } from "@test/utils";

describe("health check", () => {
  it("returns 404 when app is alive but route does not exists", async () => {
    const response = await request(server).get("/pong");

    expect(response.status).toBe(404);
  });

  it("returns 200 when app is alive", async () => {
    const response = await request(server).get("/healthz");

    expect(response.status).toBe(200);
  });
});
