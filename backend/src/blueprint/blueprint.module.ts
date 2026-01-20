import { Module } from '@nestjs/common';
import { BlueprintService } from './blueprint.service';
import { BlueprintController } from './blueprint.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [BlueprintController],
  providers: [BlueprintService, PrismaService],
})
export class BlueprintModule {}

