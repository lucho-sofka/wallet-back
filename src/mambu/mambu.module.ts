import { Module } from "@nestjs/common";
import { MambuService } from "../mambu/service/mambu.service";
import { MambuController } from "../mambu/controller/mambu.controller";
import { ConfigService } from "@nestjs/config";

@Module({
  controllers: [MambuController],
  providers: [MambuService, ConfigService],
  exports: [],
})
export class MambuModule {}
