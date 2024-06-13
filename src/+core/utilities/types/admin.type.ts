// import { hRAccountStatus as accountStatus } from '@/+core/enums/hRAccountStatus.enum';

type Address = {
  city: string;
  addressDetail: string;
};
export interface HRAccount {
  hrId: string;
  companyId: string;
  status: number;
  logo: string;
  name: string;
  nationality: string[];
  website: string;
  phoneNumber: string;
  addresses: Address[];
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
