export type HomeRES = {
  popular?: CompanyHome[];
  supperSpotlight?: CompanyHome[];
  featured?: CompanyHome[];
};

export type CompanyHome = {
  id?: string;
  logo?: string;
  name?: string;
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
  status?: number;
  followedCount?: number;
  createdAt?: string;
  updatedAt?: string;
  applicationCount?: number;
  viewedCount?: number;
  phoneNumber?: any;
  hrId?: string;
  count_job?: number;
  introduction?: string;
};

export type SocialMedia = {
  facebook?: string;
  linkedin?: string;
  youtube?: any;
  instagram?: any;
};

export type Address = {
  city?: string;
  addressDetail?: string;
};

export type TopConcern = {
  question?: string;
  answer?: string;
};

export type Product = {
  productPhoto?: string;
  productName?: string;
  link?: string;
  description?: string;
};
