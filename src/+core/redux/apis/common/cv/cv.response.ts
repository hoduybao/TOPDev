export type CandidateInfoRES = {
  email?: string;
  fullName?: string;
  jobPosition?: string;
  avatar?: string;
  dob?: string;
  gender?: string;
  yearsOfExperience?: number;
  phoneNumber?: string;
  socialLink?: string;
  github?: string;
  technicals?: string[];
  summary?: string;
  softSkills?: string[];
  workExperience?: WorkExperience[];
  education?: Education[];
  projects?: Project[];
  languages?: Language[];
  hobbies?: string;
  activities?: Activity[];
  otherInformations?: OtherInformation[];
  updatedAt?: string;
  myCVs?: MyCv[];
};
type Language = {
  type: string;
  level: string;
};

type OtherInformation = {
  name: string;
  description: string | null;
};

type Activity = {
  name: string;
  isCurrentActivity: boolean;
  startDate: string | null;
  endDate: string | null;
  description: string | null;
};

export type MyCv = {
  id: number;
  name: string;
  listJobApplied: any;
  link: string;
  isMain: boolean;
  updatedAt: string;
};

type WorkExperience = {
  position: string;
  company: string;
  isCurrentJob: boolean;
  startDate: string;
  endDate: string | null;
  description: string | null;
  skills: string[] | null;
  projects: Project[] | null;
};
type Project = {
  name: string;
  time: string;
  position: string | null;
  description: string | null;
};
type Education = {
  schoolName: string;
  major: string;
  isCurrentSchool: boolean;
  startDate: string;
  endDate: string | null;
  description: string | null;
};
