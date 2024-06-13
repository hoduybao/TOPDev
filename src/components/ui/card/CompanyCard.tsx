import { CustomJobResponse } from '@/+core/redux/apis/common/job/job.types';
import { JobResponse } from '@/+core/redux/apis/common/job/job.response';
import { Button, notification } from 'antd';
import { BookOutlined } from '@ant-design/icons';
import {
  useFollowJobMutation,
  useGetListFollowQuery,
  useUnfollowJobMutation,
} from '@/+core/redux/apis/common/job/job.api';

const CompanyCard = ({ data }: { data: CustomJobResponse<JobResponse> | undefined }) => {
  const { data: followJobs, isFetching } = useGetListFollowQuery({ page: 1, limit: 100 });
  const [unfollowJob, { isLoading }] = useUnfollowJobMutation();
  const [followJob, { isLoading: isFollowing }] = useFollowJobMutation();

  const handleUnfollowJob = async (jobId: string) => {
    console.log('Unfollow job', jobId);
    unfollowJob(jobId)
      .unwrap()
      .then((rs) => {
        console.log(rs);
        notification.success({ message: 'Unfollow job success' });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFollowJob = async (jobId: string) => {
    console.log('Follow job', jobId);
    followJob(jobId)
      .unwrap()
      .then((rs) => {
        console.log(rs);
        notification.success({ message: 'Follow job success' });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // console.log(followJobs?.data);

  const isFollowed = followJobs?.data?.data?.find((job: any) => job.id === data?.data?.id);
  console.log(isFollowed);

  return (
    <>
      {data ? (
        <>
          <div className={`mr-4 p-2 w-[16.67%]`}>
            <img className='min-w-[70px]' src={data?.data?.company?.logo} alt='' />
          </div>

          <div className='w-[100%]'>
            <div className='font-bold text-2xl'>{data && data.data.title}</div>
            <div className='uppercase opacity-70 font-bold text-lg'>
              {data?.data?.company?.name}
            </div>
            <div className={`mt-2 text-base opacity-70`}>
              {data?.data?.company?.addresses && data?.data?.company?.addresses.length
                ? `
            ${data?.data?.company?.addresses[0]?.addressDetail} ${data?.data?.company?.addresses[0]?.city}
            `
                : null}
            </div>
            <div className={`mt-2 text-base text-orange-600 font-semibold`}>
              {data?.data?.salary ? `${data?.data?.salary} $` : null}
            </div>
          </div>
          <div>
            <Button
              onClick={async () => {
                if (isFollowed) {
                  await handleUnfollowJob(data?.data?.id);
                } else {
                  await handleFollowJob(data?.data?.id);
                }
              }}
              loading={isFetching || isLoading || isFollowing}
              className='border-none rounded-full flex items-center justify-center'
            >
              <BookOutlined className={`${isFollowed ? 'text-orange-500' : ''} w-full h-full'`} />
            </Button>
          </div>
        </>
      ) : null}
    </>
  );
};

export default CompanyCard;
