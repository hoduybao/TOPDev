// export type FilterCompanyTypeREQ = {
//   keywords?: string;
//   offset?: number;
//   limit?: number;
//   status?: string;
// };

export type FilterCompanyTypeREQ = {
  keywords?: string;
  address?: string;
  page?: number;
  limit?: number;
  status?: number;
  type?: string;
};

export type CreateCompanyREQ = {
  id: string;
  logo?: string;
  name: string;
  tagline?: string;
  nationality?: string[];
  companySize?: string;
  industry?: string[];
  techStack?: string[];
  website?: string;
  socialMedia?: SocialMedia;
  addresses?: Address[];
  benefits?: string[];
  coverPhoto?: string;
  galleries?: string[];
  topConcerns?: TopConcern[];
  products?: Product[];
  status: number;
  followedCount: number;
  createdAt: string;
  updatedAt: string;
  applicationCount: number;
  viewedCount: number;
  phoneNumber?: string;
  hrId: string;
  jobCount: number;
  introduction: any;
  reason?: string;
};

export interface SocialMedia {
  facebook: string;
  linkedin: string;
  youtube: any;
  instagram: any;
}

export interface Address {
  city: string;
  addressDetail: string;
}

export interface TopConcern {
  question: string;
  answer?: string;
}

export interface Product {
  productPhoto?: string;
  productName: string;
  link?: string;
  description?: string;
}
