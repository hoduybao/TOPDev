export enum TechnicalsEnum {
  Javascript = 'Javascript',
  Flutter = 'Flutter',
  Game = 'Game',
  Java = 'Java',
  React_Native = 'React_Native',
  Designer = 'Designer',
  '.NET' = '.NET',
  Tester = 'Tester',
  Golang = 'Golang',
  'C#' = 'C#',
  Product_Manager = 'Product_Manager',
  AWS = 'AWS',
  PHP = 'PHP',
  Business_Analyst = 'Business_Analyst',
  Azure = 'Azure',
  Python = 'Python',
  Cloud = 'Cloud',
  'C++' = 'C++',
  System_admin = 'System_admin',
  'UI/UX' = 'UI/UX',
  iOS = 'iOS',
  DevOps = 'DevOps',
  Android = 'Android',
  System_Engineer = 'System_Engineer',
  Data_Analyst = 'Data_Analyst',
  HTML = 'HTML',
  Front_End = 'Front_End',
  AngularJS = 'AngularJS',
  Unity = 'Unity',
  Back_End = 'Back_End',
  SAP = 'SAP',
  Kotlin = 'Kotlin',
  'QA/QC' = 'QA/QC',
  Magento_Developer = 'Magento_Developer',
  IT_Security = 'IT_Security',
  NodeJS = 'NodeJS',
  Wordpress = 'Wordpress',
  IT_Support = 'IT_Support',
  ReactJS = 'ReactJS',
  Network = 'Network',
  IT_helpdesk = 'IT_helpdesk',
  VueJS = 'VueJS',
  Embedded = 'Embedded',
  ERP = 'ERP',
  SQL = 'SQL',
  Solution_Architect = 'Solution_Architect',
  Laravel = 'Laravel',
  Database = 'Database',
  'ASP.NET' = 'ASP.NET',
  Xamarin = 'Xamarin',
  Angular = 'Angular',
}

export const TechnicalsEnumTranslation: Record<TechnicalsEnum, string> = {
  [TechnicalsEnum.Javascript]: 'Javascript',
  [TechnicalsEnum.Flutter]: 'Flutter',
  [TechnicalsEnum.Game]: 'Game',
  [TechnicalsEnum.Java]: 'Java',
  [TechnicalsEnum.React_Native]: 'React Native',
  [TechnicalsEnum.Designer]: 'Designer',
  [TechnicalsEnum['.NET']]: '.NET',
  [TechnicalsEnum.Tester]: 'Tester',
  [TechnicalsEnum.Golang]: 'Golang',
  [TechnicalsEnum['C#']]: 'C#',
  [TechnicalsEnum.Product_Manager]: 'Product Manager',
  [TechnicalsEnum.AWS]: 'AWS',
  [TechnicalsEnum.PHP]: 'PHP',
  [TechnicalsEnum.Business_Analyst]: 'Business Analyst',
  [TechnicalsEnum.Azure]: 'Azure',
  [TechnicalsEnum.Python]: 'Python',
  [TechnicalsEnum.Cloud]: 'Cloud',
  [TechnicalsEnum['C++']]: 'C++',
  [TechnicalsEnum.System_admin]: 'System admin',
  [TechnicalsEnum['UI/UX']]: 'UI/UX',
  [TechnicalsEnum.iOS]: 'iOS',
  [TechnicalsEnum.DevOps]: 'DevOps',
  [TechnicalsEnum.Android]: 'Android',
  [TechnicalsEnum.System_Engineer]: 'System Engineer',
  [TechnicalsEnum.Data_Analyst]: 'Data Analyst',
  [TechnicalsEnum.HTML]: 'HTML',
  [TechnicalsEnum.Front_End]: 'Front-End',
  [TechnicalsEnum.AngularJS]: 'AngularJS',
  [TechnicalsEnum.Unity]: 'Unity',
  [TechnicalsEnum.Back_End]: 'Back-End',
  [TechnicalsEnum.SAP]: 'SAP',
  [TechnicalsEnum.Kotlin]: 'Kotlin',
  [TechnicalsEnum['QA/QC']]: 'QA/QC',
  [TechnicalsEnum.Magento_Developer]: 'Magento Developer',
  [TechnicalsEnum.IT_Security]: 'IT Security',
  [TechnicalsEnum.NodeJS]: 'NodeJS',
  [TechnicalsEnum.Wordpress]: 'Wordpress',
  [TechnicalsEnum.IT_Support]: 'IT Support',
  [TechnicalsEnum.ReactJS]: 'ReactJS',
  [TechnicalsEnum.Network]: 'Network',
  [TechnicalsEnum.IT_helpdesk]: 'IT helpdesk',
  [TechnicalsEnum.VueJS]: 'VueJS',
  [TechnicalsEnum.Embedded]: 'Embedded',
  [TechnicalsEnum.ERP]: 'ERP',
  [TechnicalsEnum.SQL]: 'SQL',
  [TechnicalsEnum.Solution_Architect]: 'Solution Architect',
  [TechnicalsEnum.Laravel]: 'Laravel',
  [TechnicalsEnum.Database]: 'Database',
  [TechnicalsEnum['ASP.NET']]: 'ASP.NET',
  [TechnicalsEnum.Xamarin]: 'Xamarin',
  [TechnicalsEnum.Angular]: 'Angular',
};

export enum JobTypeEnum {
  IN_OFFICE = 'IN_OFFICE',
  HYBRID = 'HYBRID',
  REMOTE = 'REMOTE',
  OVERSEA = 'OVERSEA',
}

export const JobTypeTranslation: Record<JobTypeEnum, string> = {
  [JobTypeEnum.IN_OFFICE]: 'In office',
  [JobTypeEnum.HYBRID]: 'Hybrid',
  [JobTypeEnum.REMOTE]: 'Remote',
  [JobTypeEnum.OVERSEA]: 'Oversea',
};

export enum ContractTypeEnum {
  FULLTIME = 'FULLTIME',
  PARTTIME = 'PARTTIME',
  FREELANCE = 'FREELANCE',
}

export const ContractTypeTranslation: Record<ContractTypeEnum, string> = {
  [ContractTypeEnum.FULLTIME]: 'Full time',
  [ContractTypeEnum.PARTTIME]: 'Part time',
  [ContractTypeEnum.FREELANCE]: 'Freelance',
};

export enum LevelEnum {
  ENTRY_LEVEL = 'ENTRY_LEVEL',
  INTERN = 'INTERN',
  FRESHER = 'FRESHER',
  JUNIOR = 'JUNIOR',
  MIDDLE = 'MIDDLE',
  SENIOR = 'SENIOR',
  LEADER = 'LEADER',
  MANAGER = 'MANAGER',
}

export const LevelTranslation: Record<LevelEnum, string> = {
  [LevelEnum.ENTRY_LEVEL]: 'Entry level',
  [LevelEnum.INTERN]: 'Intern',
  [LevelEnum.FRESHER]: 'Fresher',
  [LevelEnum.JUNIOR]: 'Junior',
  [LevelEnum.MIDDLE]: 'Middle',
  [LevelEnum.SENIOR]: 'Senior',
  [LevelEnum.LEADER]: 'Leader',
  [LevelEnum.MANAGER]: 'Manager',
};

export enum SalaryTypeEnum {
  TO = 'TO',
  FROM = 'FROM',
  RANGE = 'RANGE',
  NEGOTIATE = 'NEGOTIATE',
}

export const SalaryTypeTranslation: Record<SalaryTypeEnum, string> = {
  [SalaryTypeEnum.FROM]: 'From',
  [SalaryTypeEnum.TO]: 'To',
  [SalaryTypeEnum.RANGE]: 'Range',
  [SalaryTypeEnum.NEGOTIATE]: 'Negotiate',
};

export enum ExperienceEnum {
  UNDER_1_YEAR = 'UNDER_1_YEAR',
  ONE_YEAR = '1_YEAR',
  TWO_YEAR = '2_YEAR',
  THREE_YEAR = '3_YEAR',
  FOUR_YEAR = '4_YEAR',
  FIVE_YEAR = '5_YEAR',
  NONE = 'NONE',
  OVER_5_YEAR = 'OVER_5_YEAR',
}

export const ExperienceTranslation: Record<ExperienceEnum, string> = {
  [ExperienceEnum.NONE]: 'No experience',
  [ExperienceEnum.UNDER_1_YEAR]: 'Under 1 year',
  [ExperienceEnum.ONE_YEAR]: '1 year',
  [ExperienceEnum.TWO_YEAR]: '2 years',
  [ExperienceEnum.THREE_YEAR]: '3 years',
  [ExperienceEnum.FOUR_YEAR]: '4 years',
  [ExperienceEnum.FIVE_YEAR]: '5 years',
  [ExperienceEnum.OVER_5_YEAR]: '5 years+',
};

export enum CurrencyEnum {
  USD = 'USD',
  VND = 'VND',
}

export const CurrencyTranslation: Record<CurrencyEnum, string> = {
  [CurrencyEnum.USD]: '$',
  [CurrencyEnum.VND]: 'VND',
};
