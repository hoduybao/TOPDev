import { PostStatusEnum, PostStatusTranslation } from '@/+core/enums/postStatus.enum';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  status: PostStatusEnum;
};

const PostStatus = ({ status }: Props) => {
  const { t } = useTranslation();
  const style = useMemo(() => {
    switch (status) {
      case PostStatusEnum.PENDING:
        return 'text-yellow-800 bg-yellow-400';
      case PostStatusEnum.REJECTED:
        return 'text-white-900 bg-red-600';
      case PostStatusEnum.HIDE:
        return 'text-black-900 bg-gray-100';
      case PostStatusEnum.EXPRIED:
        return 'text-gray-700 bg-gray-100';
      case PostStatusEnum.PUBLIC:
        return 'text-sky-900 bg-sky-100';
      case PostStatusEnum.APPROVED:
        return 'text-sky-900 bg-sky-100';
    }
  }, [status]);

  return (
    <span className={`px-2 py-0.5 rounded-[15px] text-[13px] font-medium  ${style}`}>
      {PostStatusTranslation(t)[status]}
    </span>
  );
};

export default PostStatus;
