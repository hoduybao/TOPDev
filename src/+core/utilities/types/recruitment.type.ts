export interface JobType {
  id?: string;
  companyId?: string;
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
  interviewProcess?: string[];
  status?: string;
}

export interface ApplicationType {
  id?: string;
  jobId?: string;
  name?: string;
  cvUrl?: string;
  email?: string;
  phone?: string;
  status?: string;
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
