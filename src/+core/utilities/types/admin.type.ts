import { hRAccountStatus as accountStatus } from '@/+core/enums/hRAccountStatus.enum';

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
  createdBy: string;
  title: string;
  jobDescription: string;
  level: string;
  salary: number;
  technicals: string[];
  minExperience: number;
  maxExperience: number;
  contractType: string;
  workingPlace: string;
  interviewProcess: string;
  followedCount: number;
  appliedCount: number;
  status: number;
  createdAt: string;
  updatedAt: string;
  companyId: string;
  company: CompanyInfo;
}

export interface CompanyInfo {
  id: string;
  name: string;
  address: string;
  url: string;
  companySize: string;
  skills: string[];
  nations: string;
  benefits: string[];
  fields: string[];
  about: string;
  status: number;
  image: string;
  createdAt: string;
  updatedAt: string;
  followedCount: number;
  cover: string;
  images: string[];
  slogan: string;
  products: any[];
}
