export interface CompanyType {
  id?: string;
  name?: string;
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
  experienceYearsMin?: string | number;
  experienceYearsMax?: string | number;
  level?: string;
  type?: string;
  typeContract?: string;
  techs?: string[];
  interviewProcess?: string[] | any;
  description?: string;
  location?: string;
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
  cvUrl?: string;
  email?: string;
  phone?: string;
  status?: string | any;
  rating?: number;
  note?: string;
}

// Recruitment Process Kaban
export type Id = string | number;

export interface KanbanColumn {
  id: Id;
  title: string;
}

export type KanbanApplicationType = Omit<ApplicationType, 'id'> & {
  id: Id;
  columnId: Id;
  title?: string;
};

// export interface KanbanApplicationType {
//   id: Id;
//   columnId: Id;
// }
