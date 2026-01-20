import { IsEnum } from 'class-validator';
import { ContractStatus } from '../contract.lifecycle';

export class UpdateContractStateDto {
  @IsEnum(ContractStatus)
  nextStatus: ContractStatus;
}
