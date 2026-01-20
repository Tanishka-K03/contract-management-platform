import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBlueprintDto } from './dto/create-blueprint.dto';

@Injectable()
export class BlueprintService {
  constructor(private readonly prisma: PrismaService) {}

  async createBlueprint(dto: CreateBlueprintDto) {
    return this.prisma.blueprint.create({
      data: {
        name: dto.name,
        fields: {
          create: dto.fields.map((field) => ({
            type: field.type,
            label: field.label,
            positionX: field.positionX,
            positionY: field.positionY,
          })),
        },
      },
      include: {
        fields: true,
      },
    });
  }

  async getAllBlueprints() {
    return this.prisma.blueprint.findMany({
      include: {
        fields: true,
      },
    });
  }
}

