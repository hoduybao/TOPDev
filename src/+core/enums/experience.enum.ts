import { TFunction } from 'i18next';
export enum ExperienceEnum {
  NONE = 'NONE',
  UNDER_1_YEAR = 'UNDER_1_YEAR',
  '1_YEAR' = '1_YEAR',
  '2_YEAR' = '2_YEAR',
  '3_YEAR' = '3_YEAR',
  '4_YEAR' = '4_YEAR',
  '5_YEAR' = '5_YEAR',
  'OVER_5_YEAR' = 'OVER_5_YEAR',
}

export function ExperienceTranslation(t: TFunction): Record<ExperienceEnum, string> {
  return {
    [ExperienceEnum.NONE]: t('NONE'),
    [ExperienceEnum.UNDER_1_YEAR]: t('UNDER_1_YEAR'),
    [ExperienceEnum['1_YEAR']]: t('1_YEAR'),
    [ExperienceEnum['2_YEAR']]: t('2_YEAR'),
    [ExperienceEnum['3_YEAR']]: t('3_YEAR'),
    [ExperienceEnum['4_YEAR']]: t('4_YEAR'),
    [ExperienceEnum['5_YEAR']]: t('5_YEAR'),
    [ExperienceEnum['OVER_5_YEAR']]: t('OVER_5_YEAR'),
  };
}
