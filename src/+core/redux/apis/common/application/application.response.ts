type JobDetail = {
  endDate: string;
  jobId: string;
  jobType: string;
  level: string;
  title: string;
};
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
  jobDetail: JobDetail;
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
  jobDetail: JobDetailRES;
};

export type JobDetailRES = {
  jobId: string;
  title: string;
  level?: string;
  jobType?: string;
  companyName: string;
  endDate?: string;
};
