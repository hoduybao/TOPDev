import { industries } from '@/+core/constants/company.profile';
import {
  DeleteOutlined,
  EditOutlined,
  FacebookOutlined,
  GlobalOutlined,
  LinkOutlined,
  LinkedinOutlined,
  MenuOutlined,
  MessageOutlined,
  PlusOutlined,
  QuestionCircleOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import { Button, Form, Input, Select, type FormProps } from 'antd';
import { countries } from 'countries-list';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';

import { technicalItems } from '../../manage-jobs/create/components/SelectItems';
import AddAddressModal from './AddAddressModal';
import AddProductModal from './AddProductModal';
import TextEditor from './TextEditor';
import UploadFileInput from './UploadFileInput';
import {
  useGetCompanyProfileQuery,
  useUpdateCompanyProfileMutation,
} from '@/+core/redux/apis/common/company/company.api';

// const { Option } = Select;

interface CompanyProductType {
  id?: string;
  name?: string;
  link?: string;
  photo?: string;
  description?: string;
}

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
  companyProduct?: any;
};

const Profile = () => {
  const { t } = useTranslation();

  const [CompanyProfileForm] = Form.useForm();

  const { data, isLoading, refetch } = useGetCompanyProfileQuery();
  const [updateCompanyProfile, { isLoading: updateProfileLoading }] =
    useUpdateCompanyProfileMutation();

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
  const [isProductModalOpen, setIsProductModalOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<CompanyProductType[]>([]);
  const [editProduct, setEditProduct] = useState<{
    name: string;
    link: string;
    photoUrl: string;
    description: string;
    index: number | null;
  }>({
    name: '',
    link: '',
    photoUrl: '',
    description: '',
    index: null,
  });

  const onEditFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    // console.log('Success:', values);
    // console.log('Success introduction:', introduction);
    // console.log('Success addresses:', addresses);
    // console.log('Success products:', products);

    const CompanyProfile = {
      ...values,
      introduction: introduction,
      addresses: addresses,
      products: products,
    };

    const ProfileBody = {
      logo: CompanyProfile?.logoUrl,
      name: CompanyProfile?.companyName,
      tagline: CompanyProfile?.companyTagline,
      nationality: CompanyProfile?.nationality,
      companySize: CompanyProfile?.companySize,
      industry: CompanyProfile?.industry,
      techStack: CompanyProfile?.techStack,
      website: CompanyProfile?.website,
      socialMedia: {
        facebook: CompanyProfile?.facebook,
        linkedin: CompanyProfile?.linkedin,
        youtube: CompanyProfile?.youtube,
        instagram: null,
      },
      addresses: CompanyProfile?.addresses?.map((a: string) => {
        const city = a.split(', ')[3];
        const addressDetail = `${a.split(', ')[0]}, ${a.split(', ')[1]}, ${a.split(', ')[2]}`;

        return { city: city, addressDetail: addressDetail };
      }),
      benefits: CompanyProfile?.benefits?.map((b: any) => {
        return b?.description;
      }),
      coverPhoto: CompanyProfile?.coverPhotoUrl,
      galleries: [CompanyProfile?.galleriesUrl],
      topConcerns: CompanyProfile?.topConcerns,
      products: CompanyProfile?.products,
    };

    console.log('Success:', CompanyProfile);
    console.log('Profile Body Success:', ProfileBody);

    const res = await updateCompanyProfile(ProfileBody).unwrap();

    console.log('Update company profile API:', res);

    if (res?.statusCode === 200) {
      refetch();
      handleGetProfileInfo();
    }
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

  const showProductModal = () => {
    setIsProductModalOpen(true);
  };

  const handleProductOk = () => {
    setIsProductModalOpen(false);
  };

  const handleProductCancel = () => {
    setIsProductModalOpen(false);
  };

  const handleGetProfileInfo = async () => {
    const CompanyProfile: any = data?.data;

    CompanyProfileForm.setFieldsValue({
      ['companyName']: CompanyProfile?.name ? CompanyProfile?.name : 'null',
      ['companyTagline']: CompanyProfile?.tagline ? CompanyProfile?.tagline : 'null',
      ['nationality']: CompanyProfile?.nationality ? CompanyProfile?.nationality : [],
      ['companySize']: CompanyProfile?.companySize ? CompanyProfile?.companySize : 'null',
      ['industry']: CompanyProfile?.industry ? CompanyProfile?.industry : [],
      ['techStack']: CompanyProfile?.techStack ? CompanyProfile?.techStack : [],
      ['website']: CompanyProfile?.website ? CompanyProfile?.website : 'null',
      ['facebook']: CompanyProfile?.socialMedia?.facebook
        ? CompanyProfile?.socialMedia?.facebook
        : 'null',
      ['linkedin']: CompanyProfile?.socialMedia?.linkedin
        ? CompanyProfile?.socialMedia?.linkedin
        : 'null',
      ['youtube']: CompanyProfile?.socialMedia?.youtube
        ? CompanyProfile?.socialMedia?.youtube
        : 'null',
      ['benefits']: CompanyProfile?.benefits
        ? CompanyProfile?.benefits?.map((b: string) => {
            return { description: b };
          })
        : [],
      ['topConcerns']: CompanyProfile?.topConcerns
        ? CompanyProfile?.topConcerns?.map((c: { question: string; answer: string }) => {
            return { question: c?.question, answer: c?.answer };
          })
        : [],
    });

    if (CompanyProfile?.addresses) {
      const addrs: any = [];
      for (let i = 0; i < CompanyProfile?.addresses?.length; ++i) {
        const addrValue = `${CompanyProfile?.addresses[i]?.addressDetail}, ${CompanyProfile?.addresses[i]?.city}`;
        addrs.push(addrValue);
      }
      setAddresses(addrs);
    }

    if (CompanyProfile?.products) {
      const prods: any = [];
      for (let i = 0; i < CompanyProfile?.products?.length; ++i) {
        const prodValue = {
          name: CompanyProfile?.products[i]?.productName,
          link: CompanyProfile?.products[i]?.link,
          photo: CompanyProfile?.products[i]?.productPhoto,
          description: CompanyProfile?.products[i]?.description,
        };

        prods.push(prodValue);
      }
      setProducts(prods);
    }
  };

  useEffect(() => {
    handleGetNationality();
  }, []);

  useEffect(() => {
    // handleGetProfileInfo();
    if (!isLoading && data?.statusCode === 200) {
      handleGetProfileInfo();
    }
  }, [isLoading]);

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
              <Select size='large' mode='multiple' options={nationalityOption} />
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
            <Select size='large' mode='multiple' options={industries} />
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
            <Select size='large' mode='multiple' options={technicalItems}></Select>
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
              setEditValue={setEditAddress}
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

                    {/* <Form.Item
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
                    </Form.Item> */}

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

      <div className='my-5 w-[100%] h-[1px] bg-gray-200'></div>

      <section>
        <Form.Item<FieldType>
          label={
            <h1 className='text-xl font-bold flex items-center gap-1'>{t('companyProduct')}</h1>
          }
          name='companyProduct'
        >
          <div>
            <div className='flex items-center justify-between'>
              <p>Add company product information</p>
              <Button
                size='large'
                onClick={() => {
                  showProductModal();
                }}
                danger
              >
                <p className='font-semibold'>
                  <PlusOutlined /> ADD
                </p>
              </Button>
            </div>

            <AddProductModal
              isModalOpen={isProductModalOpen}
              handleOk={handleProductOk}
              handleCancel={handleProductCancel}
              products={products}
              setProducts={setProducts}
              editValue={editProduct}
              setEditValue={setEditProduct}
            />

            <div className='my-5 flex flex-col gap-3'>
              {products?.map((product: CompanyProductType, index) => {
                return (
                  <div key={uuidv4()} className='flex items-center justify-between'>
                    <div className='flex items-center gap-5'>
                      <div className='flex flex-col gap-3'>
                        <h1 className='text-[15px] font-bold'>{product?.name}</h1>
                        <p className='text-[15px]'>{product?.description}</p>
                        {product?.photo && <img className='w-[150px]' src={product?.photo} />}
                        {product?.link && (
                          <div className='flex items-center gap-3'>
                            <LinkOutlined className='text-xl' />
                            <a href={product?.link}>{product?.link}</a>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='flex items-center gap-5'>
                      <div
                        className='hover:cursor-pointer hover:text-blue-500'
                        onClick={() => {
                          console.log(product);

                          if (product?.name) {
                            setEditProduct({
                              name: product?.name,
                              link: product?.link ? product?.link : '',
                              photoUrl: product?.photo ? product?.photo : '',
                              description: product?.description ? product?.description : '',
                              index: index,
                            });
                            showProductModal();
                          }
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
          </div>
        </Form.Item>
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
          <Button
            type='primary'
            htmlType='submit'
            danger
            disabled={updateProfileLoading ? true : false}
          >
            {updateProfileLoading ? 'Loading' : t('saveCompanyProfile')}
          </Button>
        </div>
      </section>
    </Form>
  );
};

export default Profile;
