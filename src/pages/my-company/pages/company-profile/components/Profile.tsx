import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { countries } from 'countries-list';
import { v4 as uuidv4 } from 'uuid';
import { Form, Input, Button, Select } from 'antd';
import { type FormProps } from 'antd';
import {
  CheckOutlined,
  DeleteOutlined,
  DollarOutlined,
  EditOutlined,
  FacebookOutlined,
  GlobalOutlined,
  LinkOutlined,
  LinkedinOutlined,
  PlusOutlined,
  SketchOutlined,
  MenuOutlined,
  YoutubeOutlined,
  QuestionCircleOutlined,
  MessageOutlined,
} from '@ant-design/icons';
import { industries, techStack } from '@/+core/constants/company.profile';

import UploadFileInput from './UploadFileInput';
import TextEditor from './TextEditor';
import AddAddressModal from './AddAddressModal';

const { Option } = Select;

type FieldType = {
  logoUrl?: string;
  companyName?: string;
  companyTagline?: string;
  nationality?: string;
  companySize?: string;
  introduction?: string;
  industry?: string;
  techStack?: string;
  website?: string;
  facebook?: string;
  linkedin?: string;
  youtube?: string;
  link?: string;
  addresses?: string[];
  benefits?: any;
  coverPhotoUrl?: string;
  galleriesUrl?: string;
  topConcerns?: any;
};

const Profile = () => {
  const { t } = useTranslation();

  const [CompanyProfileForm] = Form.useForm();

  const [nationalityOption, setNationalityOption] = useState<{ value: string; label: string }[]>(
    [],
  );
  const [introduction, setIntroduction] = useState<string>('');
  const [addLink, setAddLink] = useState<boolean>(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState<boolean>(false);
  const [addresses, setAddresses] = useState<string[]>([]);
  const [editAddress, setEditAddress] = useState<{ value: string; index: number | null }>({
    value: '',
    index: null,
  });

  const onEditFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    console.log('Success:', values);
    console.log('Success introduction:', introduction);
    console.log('Success addresses:', addresses);
  };

  const onEditFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleGetNationality = () => {
    const options = [];
    for (const [key, value] of Object.entries(countries)) {
      if (key) {
        const option = { value: value?.native, label: value?.native };
        options.push(option);
      }
    }
    setNationalityOption(options);
  };

  const showAddressModal = () => {
    setIsAddressModalOpen(true);
  };

  const handleAddressOk = () => {
    setIsAddressModalOpen(false);
  };

  const handleAddressCancel = () => {
    setIsAddressModalOpen(false);
  };

  const handleDeleteAddress = (value: number) => {
    const filterAddr = addresses?.filter((addr, index) => {
      if (index !== value) return addr;
    });

    setAddresses(filterAddr);
  };

  useEffect(() => {
    handleGetNationality();
  }, []);

  return (
    <Form
      name='company-profile'
      form={CompanyProfileForm}
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      onFinish={onEditFinish}
      onFinishFailed={onEditFinishFailed}
    >
      <section>
        <h1 className='text-xl font-bold'>{t('companyInformation')}</h1>
        <div className='mt-5 grid xl:grid-cols-4 gap-x-[50px] gap-y-4'>
          <div>
            <UploadFileInput
              label={'Logo'}
              form={CompanyProfileForm}
              name='logoUrl'
              description='Types: png, jpg, jpeg. <5MB'
              rules={[{ required: true, message: 'Please upload company logo!' }]}
            />
          </div>
          <div className='xl:col-span-2 flex flex-col gap-4'>
            <Form.Item<FieldType>
              label={<p className='text-[15px] font-semibold'>{t('companyName')}</p>}
              name='companyName'
              rules={[{ required: true, message: 'Please input company name!' }]}
            >
              <Input
                size='large'
                placeholder='Enter a shortened & recognizable name (Eg. TopDev)'
              />
            </Form.Item>

            <Form.Item<FieldType>
              label={<p className='text-[15px] font-semibold'>{t('companyTagline')}</p>}
              name='companyTagline'
              rules={[{ required: true, message: 'Please input company tagline!' }]}
            >
              <Input
                size='large'
                placeholder='Enter your company Tagline (Eg. Top IT Jobs For Developers in Vietnam)'
              />
            </Form.Item>
          </div>
          <div className='flex flex-col gap-4'>
            <Form.Item<FieldType>
              label={<p className='text-[15px] font-semibold'>{t('nationality')}</p>}
              name='nationality'
              rules={[{ required: true, message: 'Please input company nationality!' }]}
            >
              <Select size='large' options={nationalityOption} />
            </Form.Item>

            <Form.Item<FieldType>
              label={<p className='text-[15px] font-semibold'>{t('companySize')}</p>}
              name='companySize'
              rules={[{ required: true, message: 'Please input company size!' }]}
            >
              <Select
                size='large'
                options={[
                  { value: 'Less than 10', label: 'Less than 10' },
                  { value: '10-24', label: '10-24' },
                  { value: '25-99', label: '25-99' },
                  { value: '100-499', label: '100-499' },
                  { value: '500-999', label: '500-999' },
                  { value: 'Over 1000', label: 'Over 1000' },
                  { value: '5.000-9.999', label: '5.000-9.999' },
                  { value: '10.000-19.999', label: '10.000-19.999' },
                  { value: 'Over 20.000', label: 'Over 20.000' },
                ]}
              />
            </Form.Item>
          </div>
        </div>
      </section>

      <section className='mt-10 grid xl:grid-cols-2 gap-x-[50px] gap-y-4'>
        <Form.Item<FieldType>
          label={<p className='text-[15px] font-semibold'>{t('introduction')}</p>}
          name='introduction'
        >
          <div>
            <p className='mb-3'>
              Tell job seekers about your company. Your description will appear in the About company
              tab
            </p>
            <TextEditor height={420} content={introduction} setContent={setIntroduction} />
          </div>
        </Form.Item>

        <div className='flex flex-col gap-4'>
          <Form.Item<FieldType>
            label={<p className='text-[15px] font-semibold'>{t('industry')}</p>}
            name='industry'
            rules={[{ required: true, message: 'Please input company industry!' }]}
          >
            <Select size='large' options={industries} />
          </Form.Item>

          <Form.Item
            label={<p className='text-[15px] font-semibold'>{t('techStack')}</p>}
            name='techStack'
            rules={[
              {
                required: true,
                message: 'Please select company tech stack!',
                type: 'array',
              },
            ]}
          >
            <Select size='large' mode='multiple'>
              {techStack?.map((item) => {
                return (
                  <Option key={uuidv4()} value={`${item?.value}`}>
                    {item?.label}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>

          <Form.Item<FieldType>
            label={<p className='text-[15px] font-semibold'>Website</p>}
            name='website'
          >
            <Input size='large' addonBefore={<GlobalOutlined />} placeholder='Website' />
          </Form.Item>

          <div className='flex flex-col gap-4'>
            <Form.Item<FieldType>
              label={<p className='text-[15px] font-semibold'>Social media</p>}
              name='facebook'
            >
              <Input
                size='large'
                addonBefore={<FacebookOutlined />}
                placeholder='Eg. https://facebook.com/topdevvietnam'
              />
            </Form.Item>

            <Form.Item<FieldType> name='linkedin'>
              <Input
                size='large'
                addonBefore={<LinkedinOutlined />}
                placeholder='Eg. https://www.linkedin.com/company/topdev-vn'
              />
            </Form.Item>

            <Form.Item<FieldType> name='youtube'>
              <Input
                size='large'
                addonBefore={<YoutubeOutlined />}
                placeholder='Eg. https://www.youtube.com/channel'
              />
            </Form.Item>

            {addLink ? (
              <div className='flex items-center justify-between gap-4'>
                <Form.Item<FieldType> name='link' className='w-full'>
                  <Input
                    size='large'
                    addonBefore={<LinkOutlined />}
                    placeholder='Eg. https://www.link'
                  />
                </Form.Item>
                <div
                  className='hover:cursor-pointer'
                  onClick={() => {
                    setAddLink(false);
                  }}
                >
                  <DeleteOutlined className='text-2xl' />
                </div>
              </div>
            ) : (
              <Button
                size='large'
                onClick={() => {
                  setAddLink(true);
                }}
                danger
              >
                <p className='font-semibold'>
                  <PlusOutlined /> ADD LINK
                </p>
              </Button>
            )}
          </div>
        </div>
      </section>

      <div className='my-5 w-[100%] h-[1px] bg-gray-200'></div>

      <section>
        <Form.Item<FieldType>
          label={
            <h1 className='text-xl font-bold flex items-center gap-1'>
              <p className='text-sm text-red-500'>*</p>
              {t('addresses')}
            </h1>
          }
          name='addresses'
          // rules={[{ required: true, message: 'Please input company address!' }]}
        >
          <div>
            <div className='flex items-center justify-between'>
              <p>Add your company addresses</p>
              <Button
                size='large'
                onClick={() => {
                  showAddressModal();
                }}
                danger
              >
                <p className='font-semibold'>
                  <PlusOutlined /> ADD
                </p>
              </Button>
            </div>

            <AddAddressModal
              isModalOpen={isAddressModalOpen}
              handleOk={handleAddressOk}
              handleCancel={handleAddressCancel}
              addresses={addresses}
              setAddresses={setAddresses}
              editValue={editAddress}
            />

            <div className='my-5 flex flex-col gap-3'>
              {addresses?.map((addr: string, index) => {
                return (
                  <div key={uuidv4()} className='flex items-center justify-between'>
                    <div className='flex items-center gap-5'>
                      <MenuOutlined className='text-2xl' />
                      <p className='text-[15px]'>{addr}</p>
                    </div>
                    <div className='flex items-center gap-5'>
                      <div
                        className='hover:cursor-pointer hover:text-blue-500'
                        onClick={() => {
                          setEditAddress({ value: addr, index: index });
                          showAddressModal();
                        }}
                      >
                        <EditOutlined className='text-2xl' />
                      </div>
                      <div
                        className='hover:cursor-pointer hover:text-blue-500'
                        onClick={() => {
                          handleDeleteAddress(index);
                        }}
                      >
                        <DeleteOutlined className='text-2xl' />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {addresses?.length === 0 && (
              <p className='text-red-500'>Addresses field must have at least 1 items</p>
            )}
          </div>
        </Form.Item>
      </section>

      <div className='my-5 w-[100%] h-[1px] bg-gray-200'></div>

      <section>
        <h1 className='text-xl font-bold flex items-center gap-1'>
          <p className='text-sm text-red-500'>*</p>
          {t('companyBenefits')}
        </h1>
        <p className='mt-5'>Add company benefits</p>
        <div className='mt-5'>
          <Form.List name='benefits'>
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <div key={key} className='flex items-center gap-3 my-5'>
                    <MenuOutlined className='text-2xl' />

                    <Form.Item
                      {...restField}
                      className='w-[20%]'
                      name={[name, 'icon']}
                      rules={[{ required: true, message: 'Missing benefit icon' }]}
                    >
                      <Select
                        placeholder='Pick an icon'
                        options={[
                          {
                            value: '<CheckOutlined />',
                            label: (
                              <>
                                <CheckOutlined /> Check
                              </>
                            ),
                          },
                          {
                            value: '<PlusOutlined />',
                            label: (
                              <>
                                <PlusOutlined /> Plus
                              </>
                            ),
                          },
                          {
                            value: '<DollarOutlined />',
                            label: (
                              <>
                                <DollarOutlined /> Dollar
                              </>
                            ),
                          },
                          {
                            value: '<SketchOutlined />',
                            label: (
                              <>
                                <SketchOutlined /> Diamond
                              </>
                            ),
                          },
                        ]}
                      />
                    </Form.Item>

                    <Form.Item
                      {...restField}
                      className='w-[80%]'
                      name={[name, 'description']}
                      rules={[{ required: true, message: 'Missing benefit description' }]}
                    >
                      <Input placeholder='Add benefit description' />
                    </Form.Item>

                    <DeleteOutlined className='text-xl' onClick={() => remove(name)} />
                  </div>
                ))}
                <Form.Item>
                  <Button type='dashed' danger onClick={() => add()} block icon={<PlusOutlined />}>
                    ADD
                  </Button>
                </Form.Item>
                {fields?.length === 0 && (
                  <p className='mt-5 text-red-500'>
                    Company Benefits field must have at least 1 items
                  </p>
                )}
              </>
            )}
          </Form.List>
        </div>
      </section>

      <div className='my-5 w-[100%] h-[1px] bg-gray-200'></div>

      <section>
        <h1 className='text-xl font-bold'>{t('companyImage')}</h1>
        <div className='mt-5 grid xl:grid-cols-3 gap-x-[50px] gap-y-4'>
          <div>
            <UploadFileInput
              label={'Cover photo'}
              form={CompanyProfileForm}
              name='coverPhotoUrl'
              description='Types: png, jpg, jpeg. <5MB'
              rules={[{ required: false }]}
            />
          </div>
          <div className='xl:col-span-2 flex flex-col gap-4'>
            <UploadFileInput
              label={'Galleries'}
              form={CompanyProfileForm}
              name='galleriesUrl'
              description='Types: png, jpg, jpeg. <5MB'
              rules={[{ required: false }]}
            />
          </div>
        </div>
      </section>

      <div className='my-5 w-[100%] h-[1px] bg-gray-200'></div>

      <section>
        <h1 className='text-xl font-bold flex items-center gap-1'>{t('topConcerns')}</h1>
        <p className='mt-5'>
          Add the frequently ask questions (FAQs) to help job seekers know more about company &
          other processes
        </p>
        <div className='mt-5'>
          <Form.List name='topConcerns'>
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <div key={key} className='flex items-center gap-3 my-5'>
                    <div className='w-[100%] flex flex-col gap-3'>
                      <Form.Item {...restField} className='w-[100%]' name={[name, 'question']}>
                        <Input
                          addonBefore={<QuestionCircleOutlined />}
                          placeholder='Add question'
                        />
                      </Form.Item>

                      <Form.Item {...restField} className='w-[100%]' name={[name, 'answer']}>
                        <Input addonBefore={<MessageOutlined />} placeholder='Add answer' />
                      </Form.Item>
                    </div>

                    <DeleteOutlined className='text-xl' onClick={() => remove(name)} />
                  </div>
                ))}
                <Form.Item>
                  <Button type='dashed' danger onClick={() => add()} block icon={<PlusOutlined />}>
                    ADD
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </div>
      </section>

      <section className='mt-10 flex flex-wrap gap-4 items-center justify-between'>
        <div className='text-[15px] flex items-center gap-1'>
          <p className='font-bold'>Note:</p>
          <p>You must fill in the required fields</p>
          <p className='font-bold text-red-500'>(∗)</p>
          <p>to save</p>
        </div>
        <div className='flex items-center gap-3'>
          <Button htmlType='button' danger>
            {t('cancelCompanyProfile')}
          </Button>
          <Button type='primary' htmlType='submit' danger>
            {t('saveCompanyProfile')}
          </Button>
        </div>
      </section>
    </Form>
  );
};

export default Profile;
