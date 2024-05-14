export type FilterJobsTypeREQ = {
  keywords?: string;
  levels?: string;
  contractTypes?: string;
  workingPlace?: string;
  page?: number;
  limit?: number;
  status?: string;
};

export type FilterCompanyTypeREQ = {
  keywords?: string;
  workingPlace?: string;
  page?: number;
  limit?: number;
};
