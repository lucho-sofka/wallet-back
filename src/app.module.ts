import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MambuModule } from './mambu/mambu.module';
import { PtsModule } from './pts/pts.module';

@Module({
  imports: [MambuModule, PtsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
