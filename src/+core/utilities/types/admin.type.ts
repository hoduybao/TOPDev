import { hRAccountStatus as accountStatus } from '@/+core/enums/hRAccountStatus.enum';
import { jobStatus } from '@/+core/enums/jobStatus.enum';

export interface HRAccount {
  id: string;
  companyName: string;
  taxCode: number;
  displayName: string;
  fields: string[];
  status: accountStatus;
  address: string;
}

export interface Job {
  id: string;
  companyName: string;
  title: string;
  level: string;
  salary: string;
  techs: string[];
  experienceYearsMin?: string;
  experienceYearsMax?: string;
  typeContract: string;
  type: string;
  jobDescription?: any;
  interviewProcess?: string[] | any;
  submittedDate: Date;
  startDate: Date;
  endDate: Date;
  status: jobStatus;
}
