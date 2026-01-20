import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BlueprintModule } from './blueprint/blueprint.module';
import { ContractModule } from './contract/contract.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // makes env vars available everywhere
    }),
    PrismaModule,
    BlueprintModule,
    ContractModule,
  ],
})
export class AppModule {}

