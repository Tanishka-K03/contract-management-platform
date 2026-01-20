import { Controller, Post, Body, Get } from "@nestjs/common";
import { BlueprintsService } from "./blueprints.service";
import { CreateBlueprintDto } from "./dto/create-blueprint.dto";

@Controller("blueprints")
export class BlueprintsController {
  constructor(private readonly service: BlueprintsService) {}

  @Post()
  create(@Body() dto: CreateBlueprintDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}

