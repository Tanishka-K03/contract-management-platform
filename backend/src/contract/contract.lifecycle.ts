export enum ContractStatus {
  CREATED = 'CREATED',
  APPROVED = 'APPROVED',
  SENT = 'SENT',
  SIGNED = 'SIGNED',
  LOCKED = 'LOCKED',
  REVOKED = 'REVOKED',
}

export const CONTRACT_TRANSITIONS: Record<ContractStatus, ContractStatus[]> = {
  CREATED: [ContractStatus.APPROVED, ContractStatus.REVOKED],
  APPROVED: [ContractStatus.SENT],
  SENT: [ContractStatus.SIGNED, ContractStatus.REVOKED],
  SIGNED: [ContractStatus.LOCKED],
  LOCKED: [],
  REVOKED: [],
};

