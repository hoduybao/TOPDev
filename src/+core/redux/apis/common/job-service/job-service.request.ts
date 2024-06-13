export type FilterJobsTypeREQ = {
  keywords?: string;
  levels?: string;
  contractTypes?: string;
  jobTypes?: string;
  address?: string;
  page?: number;
  limit?: number;
  status: 'PUBLIC';
};

export type FilterCompanyTypeREQ = {
  keywords?: string;
  address?: string;
  page?: number;
  limit?: number;
  status: '1';
};

export type FilterPostCompanyTypeREQ = {
  page?: number;
  limit?: number;
  status?: string;
  keywords?: string;
};

export type CreateJobREQ = {
  title: string;
  level: string[];
  technicals: string[];
  experience: string;
  startDate: string;
  endDate: string;
  jobType: string;
  contractType: string;
  interviewProcess: string | null;
  jobDescription: string | null;
  currency: string;
  salaryType: string;
  minSalary: number | null;
  maxSalary: number | null;
  city: string;
  address: string | null;
  district: string | null;
  addressDetails: string;
  benefit: string | null;
  skillRequirements: string | null;
};
