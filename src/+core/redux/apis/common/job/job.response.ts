export type JobResponse = {
  id: string;
  createdBy?: string;
  title?: string;
  jobDescription?: string;
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
  benefit?: string;
  skillRequirements?: string;
  interviewProcess?: string;
  currency?: string;
  city?: string;
  addressDetails?: string;
  followedCount?: number;
  appliedCount?: number;
  address?: string;
  district?: string;
  reason?: any;
  status?: string;
  viewedCount?: number;
  createdAt?: string;
  updatedAt?: string;
  company?: Company;
};

type Company = {
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
  jobCount?: number;
  introduction?: any;
  reason?: string;
};

type SocialMedia = {
  facebook?: string;
  linkedin?: string;
  youtube?: string;
  instagram?: string;
};

type Address = {
  city?: string;
  addressDetail?: string;
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
