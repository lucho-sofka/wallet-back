import { Module } from '@nestjs/common';
import { MambuService } from './mambu.service';
import { MambuController } from './mambu.controller';

@Module({
  controllers: [MambuController],
  providers: [MambuService]
})
export class MambuModule {}
