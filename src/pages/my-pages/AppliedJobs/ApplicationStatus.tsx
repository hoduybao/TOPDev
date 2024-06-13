import {
  ApplicationStatusEnum,
  ApplicationStatusTranslation,
} from '@/+core/enums/applicationStatus.enum';
import { Collapse, Steps } from 'antd';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  status: ApplicationStatusEnum;
};

const listApplicationStatus: ApplicationStatusEnum[] = [
  ApplicationStatusEnum.PENDING,
  ApplicationStatusEnum.VIEWING,
  ApplicationStatusEnum.APPROVED,
  ApplicationStatusEnum.REJECTED,
];
const ApplicationStatus = ({ status }: Props) => {
  const { t } = useTranslation();
  const applicationStatus = useMemo(() => {
    const result: string[] = [];
    for (const applicationStatus of listApplicationStatus) {
      if (
        status !== applicationStatus &&
        status !== ApplicationStatusEnum.REJECTED &&
        status !== ApplicationStatusEnum.APPROVED
      ) {
        result.push(ApplicationStatusTranslation(t)[applicationStatus]);
      }
      if (status === applicationStatus) {
        result.push(ApplicationStatusTranslation(t)[applicationStatus]);
        break;
      }
    }
    return result;
  }, [status]);

  return (
    <Collapse
      ghost
      items={[
        {
          key: '1',
          label: applicationStatus[applicationStatus.length - 1],
          children: (
            <Steps
              className='!text-red-200'
              direction='vertical'
              size='small'
              current={3}
              items={
                applicationStatus.map((status) => ({
                  title: status,
                })) || []
              }
            />
          ),
        },
      ]}
      expandIconPosition='end'
    />
  );
};

export default ApplicationStatus;
