export interface CompanyType {
  id?: string;
  name?: string;
  phone?: string;
  email?: string;
  about?: string;
  avatar?: string;
  size?: string;
  nation?: string;
  technicals?: string[];
  website?: string;
  address?: string;
}

export interface JobType {
  id?: string;
  company?: CompanyType;
  companyId?: string;
  companyName?: string;
  title?: string;
  salary?: string | number;
  responsibilities?: string[];
  skills?: string[];
  extends?: string[];
  welfare?: string[];
  minExperience?: string | number;
  maxExperience?: string | number;
  experienceYearsMin?: string | number;
  experienceYearsMax?: string | number;
  level?: string;
  type?: string;
  contractType?: string;
  technicals?: string[];
  interviewProcess?: string[] | any;
  jobDescription?: string;
  location?: string;
  workingPlace?: string;
  companyLogo?: string;
  appliedCount?: number;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: string;
  followedCount?: number;
  status?: number | string;
}

export interface ApplicationType {
  id?: string;
  jobId?: string;
  name?: string;
  fullName?: string;
  cvUrl?: string;
  email?: string;
  phone?: string;
  status?: string | any;
  rating?: number;
  note?: string;
  isApprove?: string | boolean | number;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}

// Recruitment Process Kaban
export type Id = string | number | boolean | any;

export interface KanbanColumn {
  id: Id;
  title: string;
}

export type KanbanApplicationType = Omit<ApplicationType, 'id'> & {
  id?: Id;
  columnId: Id;
  title?: string;
};

// export interface KanbanApplicationType {
//   id: Id;
//   columnId: Id;
// }
