import { Module } from "@nestjs/common";
import { PtsService } from "./service/pts.service";
import { PtsController } from "./controller/pts.controller";

@Module({
  controllers: [PtsController],
  providers: [PtsService],
  exports: [],
})
export class PtsModule {}
