export interface CompanyDetailResponse {
  statusCode: number;
  data: Company;
  message: string;
}

export interface Company {
  id: string;
  name: string;
  address: string;
  url: string;
  companySize: string;
  skills: string[];
  nations: string[];
  benefits: string[];
  fields: string[];
  about: string;
  status: number;
  image: string;
  createdAt: string;
  updatedAt: string;
  followedCount: number;
  cover: string;
  images?: string[];
  slogan: string;
  products: Product[];
}

export interface Product {
  id: number;
  companyId: number;
  name: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}
