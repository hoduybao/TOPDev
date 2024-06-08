import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Divider, Modal, Tag } from 'antd';
import { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import '../../../../styles/admin/company-profile.module.scss';
import {
  CompanyDetailResponse,
  ListCompanyRES,
} from '@/+core/redux/apis/admin/employer-management/employer-admin.response';

function prepareImagesForGallery(images: string[]) {
  return images.map((url) => ({
    original: url,
    thumbnail: url,
  }));
}

type CompanyProfileProps = {
  companyInfo: ListCompanyRES | CompanyDetailResponse;
  approveCompany?: () => void;
  rejectCompany?: () => void;
};

const CompanyInfo = (props: CompanyProfileProps) => {
  const { companyInfo, approveCompany, rejectCompany } = props;
  const [company, setCompany] = useState(companyInfo);

  useEffect(() => {
    setCompany(companyInfo);
  }, [companyInfo]);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [startImageIndex, setStartImageIndex] = useState<number>(0);

  const handleOpenModal = (index: number) => {
    setIsModalOpen(true);
    setStartImageIndex(index);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleApprove = () => {
    console.log('approve');
    if (approveCompany) {
      approveCompany();
    }
  };

  const handleReject = () => {
    if (rejectCompany) {
      rejectCompany();
    }
  };

  return (
    <div className='flex flex-col h-full justify-center'>
      <div className='px-5 py-4 max-w-[1200px] mx-auto text-black-400 relative'>
        <div className='w-full flex gap-6'>
          <div className='basis-2/3 self-start'>
            <div className='relative'>
              <img src={company.coverPhoto} className='w-full h-64 rounded' />
              <div className='absolute left-8 right-8 top-1/2 p-6 flex gap-6 bg-white-900 rounded '>
                <img src={company.logo} className='object-cover max-w-72 h-[176px]' />
                <div className='flex flex-col justify-center'>
                  <h1 className='text-2xl font-bold'>{company.name}</h1>
                  {company.tagline && (
                    <p className='font-bold text-base mt-1' style={{ color: '#5c5b5b' }}>
                      {company.tagline}
                    </p>
                  )}
                  {company.status == 0 && (
                    <div className='flex gap-3 mt-3'>
                      <Button
                        type='primary'
                        danger
                        className='font-semibold basis-1/2'
                        icon={<CheckOutlined />}
                        size='large'
                        onClick={handleApprove}
                      >
                        Approve
                      </Button>
                      <Button
                        className='basis-1/2 font-semibold border-orange-500 text-orange-500 hover:bg-orange-100 hover:!border-orange-500 hover:!text-orange-500'
                        icon={<CloseOutlined />}
                        size='large'
                        onClick={handleReject}
                      >
                        Reject
                      </Button>
                    </div>
                  )}

                  {company.status == 1 && (
                    <div className='flex gap-3 mt-4 items-center'>
                      {/* <Result status='success' title='Approved by Admin' />
                       */}
                      <div className='p-3 rounded-full bg-green-500'>
                        <CheckOutlined style={{ color: 'white', fontSize: 20 }} />
                      </div>

                      <h1 className='text-xl font-bold'>Approved by Admin</h1>
                    </div>
                  )}

                  {company.status == -1 && (
                    <div className='flex gap-3 mt-4 items-center'>
                      {/* <Result status='success' title='Approved by Admin' />
                       */}
                      <div className='p-3 rounded-full bg-red-500'>
                        <CloseOutlined style={{ color: 'white', fontSize: 20 }} />
                      </div>

                      <h1 className='text-xl font-bold'>Rejected by Admin</h1>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className='bg-white-900 rounded mt-[114px]'>
              <div className='p-6'>
                <h2 className='text-xl font-bold'>Company Profile</h2>
              </div>
              <Divider className='m-0 bg-gray-200' />
              <div className='p-6'>
                <h3 className='text-lg font-semibold'>About us</h3>
                <p>{company.introduction}</p>
                {company.galleries && (
                  <div className='flex items-start gap-4 mt-4'>
                    {company.galleries.length <= 3 &&
                      company.galleries.map((image, index) => {
                        return (
                          <div key={index} onClick={() => handleOpenModal(index)}>
                            <img
                              src={image}
                              className='basis-1/3 object-cover max-w-full max-h-full cursor-pointer'
                            />
                          </div>
                        );
                      })}

                    {company.galleries.length > 3 && (
                      <>
                        {company.galleries.slice(0, 2).map((image, index) => {
                          return (
                            <div
                              key={index}
                              className='basis-1/3'
                              onClick={() => handleOpenModal(index)}
                            >
                              <img
                                src={image}
                                className='object-cover max-w-full max-h-full cursor-pointer'
                              />
                            </div>
                          );
                        })}
                        <div
                          className='basis-1/3 relative cursor-pointer'
                          onClick={() => handleOpenModal(2)}
                        >
                          <img
                            src={company.galleries[2]}
                            className='object-cover max-w-full max-h-full'
                          />
                          <div className='absolute w-full h-full bg-black-900 top-0 bg-opacity-50 text-3xl text-white-900 flex items-center justify-center'>
                            + {company.galleries.length - 3}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )}
                <h3 className='text-lg font-semibold mt-4'>Benefits</h3>
                <ul>
                  {company.benefits?.map((benefit, index) => (
                    <li key={index}>- {benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className='basis-1/3 self-start'>
            <div className='w-full bg-white-900 rounded'>
              <div className='p-4'>
                <h2 className='text-[18px] font-bold'>General Information</h2>
              </div>
              <Divider className='m-0 bg-gray-200' />
              <div className='p-4 text-base'>
                <h3 className='font-bold'>Industry</h3>
                <p className='mt-2'>{company.industry?.join(', ')}</p>

                <h3 className='font-bold mt-4'>Company size</h3>
                <p className='mt-2'>{company.companySize}</p>

                <h3 className='font-bold mt-4'>Nationality</h3>
                <div>
                  {company.nationality?.map((nation) => {
                    return <p key={nation}>{nation}</p>;
                  })}
                </div>

                <h3 className='font-bold mt-4'>Tech stack</h3>
                <div className='mt-2'>
                  {company?.techStack?.map((field) => {
                    return (
                      <Tag
                        color='#EDFBFF'
                        style={{ color: '#1047B2', fontSize: 14, padding: 6 }}
                        className='hover:border-[#1047B2] cursor-pointer'
                        key={field}
                      >
                        {field}
                      </Tag>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className='w-full mt-4 bg-white-900 rounded'>
              <div className='p-4'>
                <h2 className='text-[18px] font-bold'>General Information</h2>
              </div>
              <Divider className='m-0 bg-gray-200' />
              <div className='p-4 text-base'>
                <h3 className='font-bold'>Office Address</h3>
                {company.addresses?.map((address, idx) => {
                  return (
                    <div key={idx} className='mt-2 flex gap-2 items-start'>
                      <svg
                        stroke='currentColor'
                        fill='none'
                        strokeWidth='2'
                        viewBox='0 0 24 24'
                        aria-hidden='true'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'></path>
                        <path d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'></path>
                      </svg>
                      <p>
                        {address.addressDetail}, {address.city}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {!companyInfo && (
          <div className='h-24 flex items-center justify-center bg-white-900 text-gray-300 text-lg mt-4 rounded'>
            Copyright © APPLANCER JOINT STOCK COMPANY
          </div>
        )}

        {company.galleries && (
          <Modal
            open={isModalOpen}
            onCancel={handleCancel}
            footer={[]}
            closeIcon={
              <Button type='primary' size='large' danger shape='circle' icon={<CloseOutlined />} />
            }
            className='bg-opacity-0'
          >
            <div className='w-full h-full flex justify-center items-center'>
              <div className='w-4/5 mt-10'>
                <ImageGallery
                  items={prepareImagesForGallery(company.galleries)}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  showThumbnails={true}
                  showNav={false}
                  startIndex={startImageIndex}
                />
              </div>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default CompanyInfo;
