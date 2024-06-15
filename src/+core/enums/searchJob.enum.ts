import { TFunction } from 'i18next';
export enum AddressSearchEnum {
  ALL = 'ALL',
  'Hồ Chí Minh' = 'Hồ Chí Minh',
  'Hà Nội' = 'Hà Nội',
  'Đà Nẵng' = 'Đà Nẵng',
}

export function AddressTranslation(t: TFunction): Record<AddressSearchEnum, string> {
  return {
    [AddressSearchEnum.ALL]: t('allLocations'),
    [AddressSearchEnum['Hồ Chí Minh']]: t('hcm'),
    [AddressSearchEnum['Hà Nội']]: t('hn'),
    [AddressSearchEnum['Đà Nẵng']]: t('dn'),
  };
}

export enum LevelSearchEnum {
  INTERN = 'INTERN',
  JUNIOR = 'JUNIOR',
  SENIOR = 'SENIOR',
  FRESHER = 'FRESHER',
  MIDDLE = 'MIDDLE',
  LEADER = 'LEADER',
  MANAGER = 'MANAGER',
}

export function LevekTranslation(t: TFunction): Record<LevelSearchEnum, string> {
  return {
    [LevelSearchEnum.INTERN]: t('intern'),
    [LevelSearchEnum.JUNIOR]: t('junior'),
    [LevelSearchEnum.SENIOR]: t('senior'),
    [LevelSearchEnum.FRESHER]: t('fresher'),
    [LevelSearchEnum.MIDDLE]: t('middle'),
    [LevelSearchEnum.LEADER]: t('leader'),
    [LevelSearchEnum.MANAGER]: t('manager'),
  };
}

export enum ContractTypeSearchEnum {
  FULLTIME = 'FULLTIME',
  PARTTIME = 'PARTTIME',
  FREELANCE = 'FREELANCE',
}

export function ContractTypeTranslation(t: TFunction): Record<ContractTypeSearchEnum, string> {
  return {
    [ContractTypeSearchEnum.FULLTIME]: t('fulltime'),
    [ContractTypeSearchEnum.PARTTIME]: t('parttime'),
    [ContractTypeSearchEnum.FREELANCE]: t('freelance'),
  };
}

export enum JobTypeSearchEnum {
  INOFFICE = 'INOFFICE',
  HYBRID = 'HYBRID',
  REMOTE = 'REMOTE',
  OVERSEA = 'OVERSEA',
}

export function JobTypeTranslation(t: TFunction): Record<JobTypeSearchEnum, string> {
  return {
    [JobTypeSearchEnum.INOFFICE]: t('inOffice'),
    [JobTypeSearchEnum.HYBRID]: t('hybrid'),
    [JobTypeSearchEnum.REMOTE]: t('remote'),
    [JobTypeSearchEnum.OVERSEA]: t('oversea'),
  };
}
