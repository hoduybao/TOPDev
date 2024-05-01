export type ApplicationDetailTypeRES = {
  id: string;
  jobId: string;
  fullName: string;
  email: string;
  phone: string;
  cvUrl: string;
  description: string;
  isApprove: boolean;
  createdAt: string;
  updatedAt: string;
  jobDetail: JobDetail;
};

export type JobDetail = {
  jobId: string;
  title: string;
};
