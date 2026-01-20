import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ContractService } from './contract.service';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractStateDto } from './dto/update-contract-state.dto';

@Controller('contracts')
export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  @Post()
  create(@Body() dto: CreateContractDto) {
    return this.contractService.create(dto);
  }

  @Get()
  findAll() {
    return this.contractService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contractService.findOne(id);
  }

  @Patch(':id/state')
  changeState(
    @Param('id') id: string,
    @Body() dto: UpdateContractStateDto,
  ) {
    return this.contractService.changeState(id, dto.nextStatus);
  }
}

