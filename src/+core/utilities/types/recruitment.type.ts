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
}
