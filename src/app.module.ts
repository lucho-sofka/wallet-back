import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MambuModule } from "./mambu/mambu.module";
import { PtsModule } from "./pts/pts.module";
import { HttpModule } from "@nestjs/axios";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    MambuModule,
    PtsModule,
    HttpModule,
    //Configuración para variables de entorno
    ConfigModule,
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/environments/.env.${process.env.ENV.trim()}`,
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
