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
