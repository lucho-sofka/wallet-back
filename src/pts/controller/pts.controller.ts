import { Body, Controller, Param, Post } from "@nestjs/common";
import { PtsService } from "../service/pts.service";

@Controller("pts")
export class PtsController {
  constructor(private readonly ptsService: PtsService) {}

  @Post()
  async sendInfoTransfer(
    @Body("ordererId") ordererId: string,
    @Body("reciverId") reciverId: string,
    @Body("transactionAmount") transactionAmount: string
  ) {
    console.log(reciverId, ordererId, transactionAmount);
    return await this.ptsService.sendInfoTransfer(
      ordererId,
      reciverId,
      transactionAmount
    );
  }
}
