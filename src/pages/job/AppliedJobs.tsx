import React from 'react';
import { useGetApplicationsByUserIdQuery } from '../../+core/redux/apis/common/application/application.api';
import { Spin, Table, TableColumnsType } from 'antd';
import { ApplicationType, JobType } from '../../+core/utilities/types/recruitment.type';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

interface DataType extends ApplicationType {
  key: React.Key;
  job: JobType;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'jobName',
  },
  {
    title: 'Job type',
    dataIndex: 'jobType',
  },
  {
    title: 'Contact type',
    dataIndex: 'jobContractType',
  },
  {
    title: 'My Job Status',
    dataIndex: 'status',
  },
  {
    title: 'Job Status',
    dataIndex: 'jobStatus',
  },
  {
    title: 'Submited CV',
    dataIndex: 'cvUrl',
    render: (cvUrl: string) => (
      <Link to={cvUrl} target='_blank' rel='noreferrer'>
        View CV
      </Link>
    ),
  },
];

const AppliedJobs = () => {
  const { isLoading, data } = useGetApplicationsByUserIdQuery('user1');
  return (
    <Spin spinning={isLoading}>
      {data && (
        <div className='w-full mx-2 overflow-x-scroll'>
          <Table
            columns={columns}
            dataSource={data.map((item: DataType) => ({
              ...item,
              jobName: item.job.title,
              jobStatus: item.job.status,
              jobType: item.job.type,
              jobContractType: item.job.typeContract,
              key: uuidv4(),
            }))}
          />
        </div>
      )}
    </Spin>
  );
};

export default AppliedJobs;
