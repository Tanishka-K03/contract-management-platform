// src/types/contract.ts

import { FieldType } from './blueprint';

export enum ContractStatus {
  CREATED = 'CREATED',
  APPROVED = 'APPROVED',
  SENT = 'SENT',
  SIGNED = 'SIGNED',
  LOCKED = 'LOCKED',
  REVOKED = 'REVOKED',
}

export interface ContractField {
  id: string;
  label: string;
  type: FieldType;
  value?: string | boolean;
}

export interface Contract {
  id: string;
  name: string;
  blueprintId: string;
  status: ContractStatus;
  fields: ContractField[];
  createdAt: string;
}
