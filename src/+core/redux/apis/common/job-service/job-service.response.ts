export type ListJobsRES = {
  id: string;
  createdBy: string;
  title: string;
  jobDescription: string | null;
  level?: string[];
  salaryType?: string;
  minSalary?: number;
  maxSalary?: number;
  technicals?: string[];
  experience?: string;
  endDate?: string;
  startDate?: string;
  jobType?: string;
  contractType?: string;
  benefit: string | null;
  skillRequirements: string | null;
  interviewProcess: string | null;
  currency?: string;
  city?: string;
  addressDetails?: string;
  address?: string;
  district?: string;
  followedCount: number;
  appliedCount: number;
  reason: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
  companyId: string;
  company: CompanyInformationResponse;
};

export type JobDetailResponse = {
  id: string;
  createdBy: string;
  title: string;
  jobDescription: string | null;
  level: string[];
  salaryType: string;
  minSalary: number | null;
  maxSalary: any | null;
  technicals: string[];
  experience: string;
  endDate: string;
  startDate: string;
  jobType: string;
  contractType: string;
  benefit: string | null;
  skillRequirements: string | null;
  interviewProcess: string | null;
  currency: string;
  city: string;
  district: string;
  addressDetails: string;
  followedCount: number;
  appliedCount: number;
  reason: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
  company: CompanyInformationResponse;
};

export type CompanyInformationResponse = {
  id: string;
  logo: string | null;
  name: string;
  tagline: string | null;
  nationality: string[] | null;
  companySize: string | null;
  industry: string[] | null;
  techStack: string[] | null;
  website: string | null;
  socialMedia: {
    facebook: string | null;
    linkedin: string | null;
    youtube: string | null;
    additional: string | null;
  } | null;
  addresses:
    | {
        city: string;
        addressDetail: string;
      }[]
    | null;
  benefits: string[] | null;
  coverPhoto: string | null;
  galleries: string[] | null;
  topConcerns:
    | {
        question: string;
        answer: string;
      }[]
    | null;

  products:
    | {
        productPhoto: string | null;
        productName: string;
        link: string | null;
        description: string;
      }[]
    | null;

  status: number;
  followedCount: number;
  createdAt: string;
  updatedAt: string;
  applicationCount: number;
};

export type ListCompanyRES = {
  id: string;
  logo?: string;
  name?: string;
  tagline?: string;
  nationality?: string[];
  companySize?: string;
  industry?: string[];
  techStack?: string[];
  website?: string;
  socialMedia?: SocialMedia;
  addresses?: Address[];
  benefits?: string[];
  coverPhoto?: string;
  galleries?: string[];
  topConcerns?: TopConcern[];
  products?: Product[];
  status?: number;
  followedCount?: number;
  createdAt?: string;
  updatedAt?: string;
  applicationCount?: number;
  viewedCount?: number;
  phoneNumber?: string;
  hrId?: string;
  jobCount: number;
  introduction?: string;
  reason?: string;
};

type SocialMedia = {
  facebook?: string;
  linkedin?: string;
  youtube?: string;
  instagram?: string;
};

type Address = {
  city: string;
  addressDetail: string;
};

type TopConcern = {
  question?: string;
  answer?: string;
};

export type Product = {
  productName?: string;
  productPhoto?: string;
  link?: string;
  description?: string;
};
