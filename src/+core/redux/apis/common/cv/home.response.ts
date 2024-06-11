export type HomeRES = {
  popular?: CompanyHome[];
  supperSpotlight?: CompanyHome[];
  featured?: CompanyHome[];
};

export type CompanyHome = {
  id?: string;
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
  phoneNumber?: any;
  hrId?: string;
  jobCount?: number;
  introduction?: string;
  job?: Job;
};
type Job = {
  id?: string;
  createdBy?: string;
  companyId?: number;
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
};

export type SocialMedia = {
  facebook?: string;
  linkedin?: string;
  youtube?: any;
  instagram?: any;
};

export type Address = {
  city?: string;
  addressDetail?: string;
};

export type TopConcern = {
  question?: string;
  answer?: string;
};

export type Product = {
  productPhoto?: string;
  productName?: string;
  link?: string;
  description?: string;
};
