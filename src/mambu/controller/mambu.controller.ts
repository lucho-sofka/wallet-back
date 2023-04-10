import { Controller, Get, Param } from '@nestjs/common';
import { MambuService } from '../service/mambu.service';


@Controller('mambu')
export class MambuController {
  constructor(private readonly mambuService: MambuService) {}

  @Get('client/:id')
  async getClientById(@Param('id') id: string) {
    return await this.mambuService.getClientById(id);
  }

  @Get('client/account/:id')
  async getAccountById(@Param('id') id: string) {
    return await this.mambuService.getAccountById(id);
  }

  @Get('client/:id/alldata')
  async getAllClientData(@Param('id') id: string) {
    return await this.mambuService.getAllClientData(id);
  }
}
