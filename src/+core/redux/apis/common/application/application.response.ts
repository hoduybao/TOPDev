export type Application = {
  id: string;
  jobId: string;
  fullName: string;
  email: string;
  phone: string;
  cvUrl: string;
  description: string;
  status: string;
  createdAt: string;
};

export type MyApplicationRES = {
  id: string;
  jobId: string;
  fullName: string;
  email?: string;
  phone?: string;
  cvUrl?: string;
  description?: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  jobDetail: JobDetail;
};

export type JobDetail = {
  jobId: string;
  title: string;
  level?: string;
  jobType?: string;
  companyName: string;
  endDate?: string;
};
