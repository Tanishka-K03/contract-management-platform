import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContractDto } from './dto/create-contract.dto';
import { CONTRACT_TRANSITIONS, ContractStatus } from './contract.lifecycle';

@Injectable()
export class ContractService {
  constructor(private readonly prisma: PrismaService) {}

  // CREATE CONTRACT FROM BLUEPRINT
  async create(dto: CreateContractDto) {
    const blueprint = await this.prisma.blueprint.findUnique({
      where: { id: dto.blueprintId },
      include: { fields: true },
    });

    if (!blueprint) {
      throw new NotFoundException('Blueprint not found');
    }

    return this.prisma.contract.create({
      data: {
        name: dto.name,
        status: ContractStatus.CREATED,
        blueprintId: blueprint.id,
        fields: {
          create: blueprint.fields.map((field) => ({
            type: field.type,
            label: field.label,
          })),
        },
      },
      include: { fields: true },
    });
  }

  // DASHBOARD LIST
  async findAll() {
    return this.prisma.contract.findMany({
      include: { fields: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  // VIEW CONTRACT
  async findOne(id: string) {
    const contract = await this.prisma.contract.findUnique({
      where: { id },
      include: { fields: true },
    });

    if (!contract) {
      throw new NotFoundException('Contract not found');
    }

    return contract;
  }

  // LIFECYCLE TRANSITION
  async changeState(id: string, nextStatus: ContractStatus) {
    const contract = await this.prisma.contract.findUnique({
      where: { id },
    });

    if (!contract) {
      throw new NotFoundException('Contract not found');
    }

    const allowed =
      CONTRACT_TRANSITIONS[contract.status as ContractStatus];

    if (!allowed.includes(nextStatus)) {
      throw new BadRequestException(
        `Invalid transition from ${contract.status} to ${nextStatus}`,
      );
    }

    return this.prisma.contract.update({
      where: { id },
      data: { status: nextStatus },
    });
  }
}

