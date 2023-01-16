import { Controller, Get, Route } from "tsoa";

@Route("users")
export class HealthController extends Controller {
  @Get()
  public async getHealth(): Promise<void> {
    this.setStatus(200);
  }
}
