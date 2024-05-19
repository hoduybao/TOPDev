import { TFunction } from 'i18next';
export enum PostStatusEnum {
  PUBLIC = 'PUBLIC',
  PENDING = 'PENDING',
  REJECTED = 'REJECTED',
  HIDE = 'HIDE',
  EXPRIED = 'EXPRIED',
  APPROVED = 'APPROVED',
}

export function PostStatusTranslation(t: TFunction): Record<PostStatusEnum, string> {
  return {
    [PostStatusEnum.PUBLIC]: t('public'),
    [PostStatusEnum.PENDING]: t('pending'),
    [PostStatusEnum.REJECTED]: t('isRejected'),
    [PostStatusEnum.HIDE]: t('hide'),
    [PostStatusEnum.EXPRIED]: t('expried'),
    [PostStatusEnum.APPROVED]: t('public'),
  };
}
