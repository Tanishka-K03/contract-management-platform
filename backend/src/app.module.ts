import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BlueprintsModule } from "./blueprints/blueprints.module";
import { PrismaService } from "./prisma.service";

@Module({
  imports: [BlueprintsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

