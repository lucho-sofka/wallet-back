import { Module } from '@nestjs/common';
import { MambuService } from '../mambu/service/mambu.service';
import { MambuController } from '../mambu/controller/mambu.controller';

@Module({
  controllers: [MambuController],
  providers: [MambuService]
})
export class MambuModule {}
