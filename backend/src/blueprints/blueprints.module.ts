import { Module } from '@nestjs/common';
import { BlueprintsService } from './blueprints.service';
import { BlueprintsController } from './blueprints.controller';

@Module({
  providers: [BlueprintsService],
  controllers: [BlueprintsController]
})
export class BlueprintsModule {}
