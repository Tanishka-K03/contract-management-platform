import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { CreateBlueprintDto } from "./dto/create-blueprint.dto";

@Injectable()
export class BlueprintsService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateBlueprintDto) {
    return this.prisma.blueprint.create({
      data: {
        name: data.name,
        fields: {
          create: data.fields,
        },
      },
      include: { fields: true },
    });
  }

  findAll() {
    return this.prisma.blueprint.findMany({
      include: { fields: true },
    });
  }
}

