import { Body, Controller, Get, Post } from '@nestjs/common';
import { BlueprintService } from './blueprint.service';
import { CreateBlueprintDto } from './dto/create-blueprint.dto';

@Controller('blueprints')
export class BlueprintController {
  constructor(private readonly blueprintService: BlueprintService) {}

  @Post()
  create(@Body() dto: CreateBlueprintDto) {
    return this.blueprintService.createBlueprint(dto);
  }

  @Get()
  findAll() {
    return this.blueprintService.getAllBlueprints();
  }
}

