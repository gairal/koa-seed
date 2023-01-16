import { Controller, Get, Route } from "tsoa";

@Route("healthz")
export class HealthController extends Controller {
  @Get()
  public async getHealth(): Promise<void> {
    this.setStatus(200);
  }
}
