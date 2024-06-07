export type ListEmployersRES = {
  id: string;
  company_id: string;
  email: string;
  name: string;
  phone: string;
  status: number;
};

export type EmployerDetailResponse = {
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

export type EmployerActionResponse = {
  statusCode: number;
  data: {
    allSuccess: boolean;
  };
  message: string;
};
