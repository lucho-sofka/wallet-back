import { Body, Controller, Param, Post } from "@nestjs/common";
import { PtsService } from "../service/pts.service";

@Controller("pts")
export class PtsController {
  constructor(private readonly ptsService: PtsService) {}

  @Post(":identificationId")
  async sendInfoTransfer(
    @Param("id") identificationId: string,
    @Body("transactionAmount") transactionAmount: string
  ) {
    return await this.ptsService.sendInfoTransfer(
      identificationId,
      transactionAmount
    );
  }
}
