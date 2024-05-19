import {
  useCreateJobMutation,
  useGetJobDetailQuery,
  useUpdateJobMutation,
} from '@/+core/redux/apis/common/job-service/job-service.api';
import { CreateJobREQ } from '@/+core/redux/apis/common/job-service/job-service.request';
import ConfirmModal from '@/components/global/ConfirmModal';
import { EditOutlined, ExclamationOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, Input, InputNumber, Select, Spin, notification } from 'antd';
import dayjs from 'dayjs';
import { t } from 'i18next';
import { useEffect, useMemo, useState } from 'react';
import { BiDetail } from 'react-icons/bi';
import { GrTechnology } from 'react-icons/gr';
import { SiGoogledataproc } from 'react-icons/si';
import ReactQuill from 'react-quill';
import { useNavigate, useParams } from 'react-router-dom';
import {
  contractTypeItems,
  currencyItems,
  experienceItems,
  jobTypeItems,
  levelItems,
  salaryTypeItems,
  technicalItems,
} from './components/SelectItems';

const { RangePicker } = DatePicker;

export const CreateJob = () => {
  const [openModal, setOpenModal] = useState(false);
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [citys, setCitys] = useState<{ label: string; value: string }[]>();
  const [selectedCity, setSelectedCity] = useState<string>();
  const [districts, setDistricts] = useState<{ label: string; value: string }[]>();

  const { data: jobDetail, isFetching } = useGetJobDetailQuery(id as string, {
    skip: !id || id === 'create',
  });
  const [createJob, { isLoading: isLoadingCreate }] = useCreateJobMutation();
  const [updateJob, { isLoading: isLoadingUpdate }] = useUpdateJobMutation();

  const onFinish = () => {
    setOpenModal(true);
  };

  const handleOK = () => {
    const values = form.getFieldsValue();
    const cityValue = citys?.find((item) => item.value === values.city)?.label;
    const districtValue = districts?.find((item) => item.value === values.district)?.label;

    const body: CreateJobREQ = {
      title: values.title,
      technicals: values.technicals,
      jobType: values.jobType,
      contractType: values.contractType,
      level: values.level,
      experience: values.experience,
      startDate: dayjs(values.publishedPeriod[0]).format('YYYY-MM-DD'),
      endDate: dayjs(values.publishedPeriod[1]).format('YYYY-MM-DD'),
      currency: values.currency,
      salaryType: values.salaryType,
      minSalary: values.minSalary,
      maxSalary: values.maxSalary,
      city: values.city,
      address:
        (values.addressDetails ? values.addressDetails + ', ' : '') +
        districtValue +
        ', ' +
        cityValue,
      district: values.district,
      addressDetails: values.addressDetails,
      jobDescription: values.jobDescription,
      skillRequirements: values.skillRequirements,
      benefit: values.benefit,
      interviewProcess: values.interviewProcess,
    };
    if (id === 'create') {
      createJob(body)
        .unwrap()
        .then(() => {
          setOpenModal(false);
          notification.success({
            message: 'Success!',
            description: 'Tạo công việc thành công',
            duration: 300,
          });
          navigate('/company/manage-jobs');
        });
    } else {
      updateJob({ id: id as string, body: body })
        .unwrap()
        .then(() => {
          setOpenModal(false);
          notification.success({
            message: 'Success!',
            description: 'Cập nhật công việc thành công',
            duration: 300,
          });
          navigate('/company/manage-jobs');
        });
    }
  };

  useEffect(() => {
    fetch('https://vapi.vnappmob.com/api/province')
      .then((res) => res.json())
      .then((data) => {
        setCitys(() =>
          data.results.map((item: any) => {
            return {
              value: item.province_id,
              label: item.province_name,
            };
          }),
        );
      });
  }, []);

  useMemo(() => {
    if (!selectedCity) return;
    fetch(`https://vapi.vnappmob.com/api/province/district/${selectedCity}`)
      .then((res) => res.json())
      .then((data) => {
        setDistricts(() =>
          data.results.map((item: any) => {
            return {
              value: item.district_id,
              label: item.district_name,
            };
          }),
        );
      });
  }, [selectedCity]);

  useEffect(() => {
    if (!jobDetail) return;
    setSelectedCity(jobDetail?.data?.city);
    form.setFieldsValue({
      title: jobDetail?.data?.title,
      technicals: jobDetail?.data?.technicals,
      jobType: jobDetail?.data?.jobType,
      contractType: jobDetail?.data?.contractType,
      level: jobDetail?.data?.level,
      experience: jobDetail?.data.experience,
      publishedPeriod: [dayjs(jobDetail?.data?.startDate), dayjs(jobDetail?.data?.endDate)],
      currency: jobDetail?.data?.currency,
      salaryType: jobDetail?.data?.salaryType,
      minSalary: jobDetail?.data?.minSalary,
      maxSalary: jobDetail?.data?.maxSalary,
      city: jobDetail?.data?.city,
      addressDetails: jobDetail.data?.addressDetails,
      district: jobDetail?.data?.district,
      jobDescription: jobDetail?.data?.jobDescription,
      skillRequirements: jobDetail?.data?.skillRequirements,
      benefit: jobDetail?.data?.benefit,
      interviewProcess: jobDetail?.data?.interviewProcess,
    });
  }, [jobDetail]);

  return (
    <div className='w-full flex justify-center mt-4'>
      <div className='w-[90%]'>
        <Spin spinning={isFetching}>
          <div className='flex flex-col gap-4 mb-10'>
            <p className='text-xl font-semibold'>Thông tin đăng tuyển chi tiết</p>
            <div className='p-4 bg-white-900 rounded-sm text-base font-normal text-black-900 shadow-md  border-l-4 border-primary-red'>
              Tin tuyển dụng của bạn sẽ được kiểm duyệt trước khi hiển thị với các ứng viên tiềm
              năng.
            </div>
            <Form
              requiredMark={false}
              className='flex flex-col gap-4'
              form={form}
              colon={false}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 'auto' }}
              autoComplete='off'
              onFinish={onFinish}
            >
              <div className='flex gap-4 bg-white-900 rounded-sm p-6'>
                <div className='w-8 h-8 rounded-full text-center  align-middle bg-gray-100 pt-1.5'>
                  <EditOutlined
                    style={{
                      fontSize: '18px',
                    }}
                  />
                </div>
                <div className='flex flex-col gap-6 w-full'>
                  <p className='text-base font-medium'>Tiêu đề tin tuyển dụng</p>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập tiêu đề tin tuyển dụng!',
                      },
                    ]}
                    name='title'
                  >
                    <Input
                      className='!outline-none !shadow-none !px-1 !py-2 text-base !border-x-0 !border-t-0 !border-b-2 !border-primary-red  !rounded-none !w-full'
                      placeholder='VD: Front-end developer'
                    />
                  </Form.Item>
                </div>
              </div>

              <div className='flex gap-4 bg-white-900 rounded-sm p-6'>
                <div className='w-8 h-8 rounded-full flex justify-center align-middle bg-gray-100 pt-1.5'>
                  <GrTechnology size={18} />
                </div>
                <div className='flex flex-col gap-6 w-full'>
                  <p className='text-base font-medium'>{t('company.skills')}</p>
                  <Form.Item name='technicals'>
                    <Select mode='multiple' placeholder='Tech stack' options={technicalItems} />
                  </Form.Item>
                </div>
              </div>
              <div className='flex gap-4 bg-white-900 rounded-sm p-6'>
                <div className='w-8 h-8 rounded-full text-center  align-middle bg-gray-100 pt-1.5'>
                  <ExclamationOutlined
                    style={{
                      fontSize: '18px',
                    }}
                  />
                </div>
                <div className='flex flex-col gap-4 w-full'>
                  <p className='text-base font-medium'>Thông tin chung</p>
                  <div className='flex justify-between gap-6 items-start'>
                    <Form.Item
                      className='!w-full'
                      label='Hình thức làm việc'
                      rules={[
                        {
                          required: true,
                          message: 'Vui lòng chọn hình thức làm việc!',
                        },
                      ]}
                      name='jobType'
                    >
                      <Select placeholder='Hình thức làm việc' options={jobTypeItems} />
                    </Form.Item>
                    <Form.Item
                      className='!w-full'
                      label='Loại công việc'
                      rules={[
                        {
                          required: true,
                          message: 'Vui lòng chọn loại công việc!',
                        },
                      ]}
                      name='contractType'
                    >
                      <Select placeholder='Loại công việc' options={contractTypeItems} />
                    </Form.Item>
                    <Form.Item
                      className='!w-full'
                      label='Cấp bậc'
                      rules={[
                        {
                          required: true,
                          message: 'Vui lòng chọn cấp bậc!',
                        },
                      ]}
                      name='level'
                    >
                      <Select
                        mode='multiple'
                        placeholder='Cấp bậc'
                        options={levelItems}
                        onSelect={(value) => {
                          if (value === 'ENTRY_LEVEL') {
                            form.setFieldsValue({
                              level: ['ENTRY_LEVEL'],
                            });
                          } else {
                            form.setFieldsValue({
                              level: form
                                .getFieldValue('level')
                                .filter((item: string) => item !== 'ENTRY_LEVEL'),
                            });
                          }
                        }}
                      />
                    </Form.Item>
                  </div>
                  <div className='flex justify-between items-start gap-6'>
                    <Form.Item
                      className='!w-[32%]'
                      label='Kinh nghiệm'
                      name='experience'
                      initialValue={'NONE'}
                    >
                      <Select placeholder='Kinh nghiệm làm việc' options={experienceItems} />
                    </Form.Item>
                    <Form.Item
                      className='flex-1'
                      label='Thời gian hiển thị'
                      name='publishedPeriod'
                      rules={[
                        {
                          required: true,
                          message: 'Vui lòng chọn thời gian hiển thị!',
                        },
                      ]}
                    >
                      <RangePicker
                        placeholder={['Ngày bắt đầu', 'Ngày kết thúc']}
                        className='!w-full'
                      />
                    </Form.Item>
                  </div>
                  <div>
                    <div className='font-medium'>Mức lương</div>
                    <div className='flex items-start gap-6'>
                      <Form.Item
                        className='!w-[32%]'
                        label='Loại tiền tệ'
                        name='currency'
                        rules={[
                          {
                            required: true,
                            message: 'Vui lòng chọn loại tiền tệ!',
                          },
                        ]}
                      >
                        <Select placeholder='Chọn loại tiền tệ' options={currencyItems} />
                      </Form.Item>
                    </div>
                    <div className='flex  items-start gap-3'>
                      <Form.Item
                        className='!w-[32%]'
                        label='Kiểu lương'
                        name='salaryType'
                        rules={[
                          {
                            required: true,
                            message: 'Vui lòng chọn kiểu lương!',
                          },
                        ]}
                      >
                        <Select placeholder='Chọn kiểu lương' options={salaryTypeItems} />
                      </Form.Item>
                      <Form.Item noStyle shouldUpdate={(prev, cur) => prev.salaryType !== cur}>
                        {({ getFieldValue }) =>
                          (getFieldValue('salaryType') === 'FROM' ||
                            getFieldValue('salaryType') === 'RANGE') && (
                            <>
                              <Form.Item
                                className='!w-[32%]'
                                label='Từ'
                                name='minSalary'
                                rules={[
                                  {
                                    required: true,
                                    message: 'Vui lòng nhập mức lương!',
                                  },
                                ]}
                              >
                                <InputNumber<number>
                                  defaultValue={0}
                                  className='!w-full'
                                  formatter={(value) =>
                                    `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                                  }
                                  parser={(value) =>
                                    value?.replace(/\$\s?|(,*)/g, '') as unknown as number
                                  }
                                />
                              </Form.Item>
                            </>
                          )
                        }
                      </Form.Item>
                      <Form.Item noStyle shouldUpdate={(prev, cur) => prev.salaryType !== cur}>
                        {({ getFieldValue }) =>
                          (getFieldValue('salaryType') === 'TO' ||
                            getFieldValue('salaryType') === 'RANGE') && (
                            <>
                              <Form.Item
                                className='!w-[32%]'
                                label='Đến'
                                name='maxSalary'
                                rules={[
                                  {
                                    required: true,
                                    message: 'Vui lòng nhập mức lương!',
                                  },
                                ]}
                              >
                                <InputNumber<number>
                                  className='!w-full'
                                  defaultValue={0}
                                  formatter={(value) =>
                                    `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                                  }
                                  parser={(value) =>
                                    value?.replace(/\$\s?|(,*)/g, '') as unknown as number
                                  }
                                />
                              </Form.Item>
                            </>
                          )
                        }
                      </Form.Item>
                    </div>
                  </div>
                  <div>
                    <div className='font-medium'>Địa chỉ làm việc</div>
                    <div className='flex items-start gap-6'>
                      <Form.Item
                        className='!w-1/4'
                        label='Tỉnh/Thành phố'
                        name='city'
                        rules={[
                          {
                            required: true,
                            message: 'Vui lòng chọn tỉnh/thành phố!',
                          },
                        ]}
                      >
                        <Select
                          placeholder='Chọn tỉnh/thành phố'
                          onChange={(value) => {
                            form.setFieldsValue({
                              district: undefined,
                            });
                            setSelectedCity(value);
                          }}
                          options={citys}
                        />
                      </Form.Item>
                      <Form.Item
                        className='!w-1/4'
                        label='Quận/Huyện'
                        name='district'
                        rules={[
                          {
                            required: true,
                            message: 'Vui lòng chọn quận/huyện!',
                          },
                        ]}
                      >
                        <Select placeholder='Chọn quận/huyện' options={districts} />
                      </Form.Item>
                      <Form.Item
                        className='!flex-1'
                        label='Địa chỉ cụ thể'
                        name='addressDetails'
                        rules={[
                          {
                            required: true,
                            message: 'Vui lòng nhập địa chỉ cụ thể!',
                          },
                        ]}
                      >
                        <Input placeholder='VD: 123 Nguyễn Văn Linh' />
                      </Form.Item>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex gap-4 bg-white-900 rounded-sm p-6'>
                <div className='w-8 h-8 rounded-full flex justify-center align-middle bg-gray-100 pt-1.5'>
                  <BiDetail size={18} />
                </div>
                <div className='flex flex-col gap-6 w-full'>
                  <p className='text-base font-medium'>Nội dung tuyển dụng chi tiết</p>
                  <div className='!h-[290px]'>
                    <Form.Item
                      className='!w-full'
                      label='Trách nhiệm công việc'
                      name='jobDescription'
                    >
                      <ReactQuill style={{ height: '200px' }} />
                    </Form.Item>
                  </div>
                </div>
              </div>
              <div className='flex gap-4 bg-white-900 rounded-sm p-6'>
                <div className='w-8 h-8 rounded-full flex justify-center align-middle bg-gray-100 pt-1.5'>
                  <BiDetail size={18} />
                </div>
                <div className='flex flex-col gap-6 w-full'>
                  <p className='text-base font-medium'>Kỹ năng & Chuyên môn</p>
                  <div className='!h-[290px]'>
                    <Form.Item
                      className='!w-full'
                      label='Mô tả kỹ năng & chuyên môn'
                      name='skillRequirements'
                    >
                      <ReactQuill style={{ height: '200px' }} />
                    </Form.Item>
                  </div>
                </div>
              </div>
              <div className='flex gap-4 bg-white-900 rounded-sm p-6'>
                <div className='w-8 h-8 rounded-full flex justify-center align-middle bg-gray-100 pt-1.5'>
                  <BiDetail size={18} />
                </div>
                <div className='flex flex-col gap-6 w-full'>
                  <p className='text-base font-medium'>Quyền lợi ứng viên</p>
                  <div className='!h-[290px]'>
                    <Form.Item className='!w-full' label='Mô tả quyền lợi ứng viên' name='benefit'>
                      <ReactQuill style={{ height: '200px' }} />
                    </Form.Item>
                  </div>
                </div>
              </div>
              <div className='flex gap-4 bg-white-900 rounded-sm p-6'>
                <div className='w-8 h-8 rounded-full flex justify-center align-middle bg-gray-100 pt-1.5'>
                  <SiGoogledataproc size={18} />
                </div>
                <div className='flex flex-col gap-6 w-full'>
                  <p className='text-base font-medium'>Quy trình phỏng vấn</p>
                  <div className='!h-[290px]'>
                    <Form.Item
                      className='!w-full'
                      label='Mô tả quy trình phỏng vấn'
                      name='interviewProcess'
                    >
                      <ReactQuill style={{ height: '200px' }} />
                    </Form.Item>
                  </div>
                </div>
              </div>
              <div className='flex justify-end items-center gap-4'>
                <Form.Item>
                  <Button
                    type='primary'
                    className='!h-10 !px-5 min-w-[103px] !py-2 !bg-gray-100 text-black-900 text-base font-medium !border-[#E7E5E4] shadow-md hover:!text-black-900'
                  >
                    Hủy
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Button
                    type='primary'
                    className='!h-10 !px-5 !py-2 !bg-primary-red text-base font-medium  !text-white-900 !border-none shadow-sm'
                    htmlType='submit'
                  >
                    Hoàn tất
                  </Button>
                </Form.Item>
              </div>
            </Form>
            <ConfirmModal
              open={openModal}
              setOpen={setOpenModal}
              handleOk={handleOK}
              isLoadingBtn={isLoadingCreate || isLoadingUpdate}
            >
              {id === 'create'
                ? 'Bạn có chắc chắn muốn tạo tin tuyển dụng này?'
                : 'Bạn có chắc chắn muốn cập nhật tin tuyển dụng này?'}
            </ConfirmModal>
          </div>
        </Spin>
      </div>
    </div>
  );
};
