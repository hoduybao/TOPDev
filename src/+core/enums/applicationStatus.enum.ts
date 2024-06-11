import { TFunction } from 'i18next';
export enum ApplicationStatusEnum {
  PENDING = 'PENDING',
  VIEWING = 'VIEWING',
  REJECTED = 'REJECTED',
  APPROVED = 'APPROVED',
}
export function ApplicationStatusTranslation(t: TFunction): Record<ApplicationStatusEnum, string> {
  return {
    [ApplicationStatusEnum.PENDING]: t('application.pending'),
    [ApplicationStatusEnum.REJECTED]: t('application.rejected'),
    [ApplicationStatusEnum.APPROVED]: t('application.approved'),
    [ApplicationStatusEnum.VIEWING]: t('application.viewing'),
  };
}
