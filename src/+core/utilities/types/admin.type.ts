import { hRAccountStatus as accountStatus } from '@/+core/enums/accountStatus.enum';

export interface HRAccount {
  id: string;
  companyName: string;
  taxCode: number;
  displayName: string;
  fields: string[];
  status: accountStatus;
  address: string;
}
