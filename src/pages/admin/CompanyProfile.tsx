import { useParams } from 'react-router-dom';
import '../../styles/admin/company-profile.css';
import { Button, Divider, Modal, Tag } from 'antd';
import { Company, CompanyDetailResponse } from '@/+core/redux/apis/admin/company/company.response';
import { useEffect, useState } from 'react';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';

const data: CompanyDetailResponse = {
  statusCode: 200,
  data: {
    id: '3mJ8VM7aWPSMmA',
    name: 'CÔNG TY CỔ PHẦN THƯƠNG MẠI VÀ DỊCH VỤ CÔNG NGHỆ GTSC VIỆT NAM',
    address: '123 Main St, City, Country',
    url: 'https://www.example.com',
    companySize: '100-499',
    skills: ['JavaScript', 'React', 'Node.js'],
    nations: ['USA', 'Vietnam'],
    benefits: [
      'Thưởng lương tháng 13 + thưởng cuối năm + thưởng Lễ tết',
      'Bảo hiểm sức khỏe PTI',
      'Teambuilding hằng năm',
      'Các chế độ BHXH, BHYT, BHTN theo quy định của Nhà nước',
      'Có cơ hội được huấn luyện và đào tạo từ các chuyên gia, đội ngũ lãnh đạo hàng đầu',
      'Môi trường làm việc chuyên nghiệp, có cơ hội thăng tiến nội bộ',
      'Thời gian làm việc từ Thứ hai đến Thứ sáu',
    ],
    fields: ['Technology', 'Software Development'],
    about:
      'Công ty Cổ phần Thương mại và Dịch vụ Công nghệ GTSC Việt Nam là thành viên của Tổng Công ty Công Nghệ - Viễn thông Toàn cầu thuộc Cục An ninh mạng và phòng chống tội phạm sửa dụng công nghệ cao của Bộ Công An. Công ty cung cấp giải pháp trọn gói về Công nghệ thông tin và viễn thông cho các đơn vị trong lực lượng Công An nhân dân, Cơ quan chính phủ và các tổ chức doanh nghiệp.  Với đội ngũ kỹ sư có chuyên môn cao và nhiều năm kinh nghiệm. Mục tiêu của GTSC là trở thành một trong những công ty hàng đầu về cung cấp sản phẩm, dịch vụ và giải pháp CNTT và Viễn thông tại Việt Nam ',
    status: 0,
    image: 'company_logo.jpg',
    createdAt: '2024-04-25T15:54:36.322Z',
    updatedAt: '2024-04-25T16:01:24.281Z',
    followedCount: 0,
    cover: 'https://picsum.photos/id/1018/1000/600/',
    images: [
      'https://picsum.photos/id/1018/1000/600/',
      'https://picsum.photos/id/1015/1000/600/',
      'https://picsum.photos/id/1018/1000/600/',
      'https://picsum.photos/id/1015/1000/600/',
      'https://picsum.photos/id/1018/1000/600/',
    ],
    slogan: 'Kết nối công nghệ - Nâng tầm tương lai',
    products: [
      {
        id: 3,
        companyId: 11,
        name: 'Product 1',
        description: 'Desciption 1',
        image: 'image1.png',
        createdAt: '2024-04-25T16:01:42.804Z',
        updatedAt: '2024-04-25T16:01:42.804Z',
      },
    ],
  },
  message: 'OK',
};

function prepareImagesForGallery(images: string[]) {
  return images.map((url) => ({
    original: url,
    thumbnail: url,
  }));
}

const CompanyProfile = () => {
  const [companyInfo, setCompanyInfo] = useState<Company>(data.data);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [startImageIndex, setStartImageIndex] = useState<number>(0);
  const params = useParams();

  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const stickyElem = document.getElementById('stickyElement');
    if (stickyElem) {
      const currStickyPos = stickyElem.getBoundingClientRect().top + window.scrollY;

      const handleScroll = () => {
        if (window.scrollY > currStickyPos) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          // stickyElem.style.position = 'relative';
          // stickyElem.style.top = 'initial';
          // stickyElem.style.visibility = 'hidden';
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const handleOpenModal = (index: number) => {
    setIsModalOpen(true);
    setStartImageIndex(index);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='px-5 py-4 max-w-[1200px] mx-auto text-black-400 relative'>
      <div className='w-full flex gap-6'>
        <div className='basis-2/3 self-start'>
          <div className='relative'>
            <img src={companyInfo.cover} className='w-full h-64 rounded' />
            <div className='absolute left-8 right-8 top-1/2 p-6 flex gap-6 bg-white-900 rounded '>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Logo-dai-hoc-khoa-hoc-tu-nhien.png/240px-Logo-dai-hoc-khoa-hoc-tu-nhien.png'
                className='object-cover h-[176px]'
              />
              <div>
                <h1 className='text-2xl font-bold'>{companyInfo.name}</h1>
                <p className='font-bold text-base mt-1' style={{ color: '#5c5b5b' }}>
                  {companyInfo.slogan}
                </p>
                <div className='flex gap-3 mt-3'>
                  <Button
                    type='primary'
                    danger
                    className='font-semibold basis-1/2'
                    icon={<CheckOutlined />}
                    size='large'
                  >
                    Approve
                  </Button>
                  <Button
                    className='basis-1/2 font-semibold border-orange-500 text-orange-500 hover:bg-orange-100 hover:!border-orange-500 hover:!text-orange-500'
                    icon={<CloseOutlined />}
                    size='large'
                  >
                    Reject
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div
            id='stickyElement'
            className='sticky flex top-[10px] p-3 m-4 gap-10 bg-white-900 rounded border boder-solid border-gray-600 z-50'
            style={{
              visibility: isVisible ? 'visible' : 'hidden',
            }}
          >
            <div>
              <h2 className='font-bold'>{companyInfo.name}</h2>
              <h3>{companyInfo.slogan}</h3>
            </div>
            <div className='flex gap-2 items-center'>
              <Button
                type='primary'
                danger
                className='font-semibold basis-1/2'
                icon={<CheckOutlined />}
              >
                Approve
              </Button>
              <Button
                className='basis-1/2 font-semibold border-orange-500 text-orange-500 hover:bg-orange-100 hover:!border-orange-500 hover:!text-orange-500'
                icon={<CloseOutlined />}
              >
                Reject
              </Button>
            </div>
          </div>

          <div className='bg-white-900 rounded'>
            <div className='p-6'>
              <h2 className='text-xl font-bold'>Company Profile</h2>
            </div>
            <Divider className='m-0 bg-gray-200' />
            <div className='p-6'>
              <h3 className='text-lg font-semibold'>About us</h3>
              <p>{companyInfo.about}</p>
              {companyInfo.images && (
                <div className='flex items-start gap-4 mt-4'>
                  {companyInfo.images.length <= 3 &&
                    companyInfo.images.map((image, index) => {
                      return (
                        <div key={index} onClick={() => handleOpenModal(index)}>
                          <img
                            src={image}
                            className='basis-1/3 object-cover max-w-full max-h-full cursor-pointer'
                          />
                        </div>
                      );
                    })}

                  {companyInfo.images.length > 3 && (
                    <>
                      {companyInfo.images.slice(0, 2).map((image, index) => {
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
                          src={companyInfo.images[2]}
                          className='object-cover max-w-full max-h-full'
                        />
                        <div className='absolute w-full h-full bg-black-900 top-0 bg-opacity-50 text-3xl text-white-900 flex items-center justify-center'>
                          + {companyInfo.images.length - 3}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
              <h3 className='text-lg font-semibold mt-4'>Benefits</h3>
              <ul>
                {companyInfo.benefits.map((benefit, index) => (
                  <li key={index}>- {benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='basis-1/3 rounded self-start'>
          <div className='w-full bg-white-900'>
            <div className='p-4'>
              <h2 className='text-[18px] font-bold'>General Information</h2>
            </div>
            <Divider className='m-0 bg-gray-200' />
            <div className='p-4 text-base'>
              <h3 className='font-bold'>Industry</h3>
              <p className='mt-2'>{companyInfo.fields.join(', ')}</p>

              <h3 className='font-bold mt-4'>Company size</h3>
              <p className='mt-2'>{companyInfo.companySize}</p>

              <h3 className='font-bold mt-4'>Nationality</h3>
              <div>
                {companyInfo.nations.map((nation) => {
                  return <p key={nation}>{nation}</p>;
                })}
              </div>

              <h3 className='font-bold mt-4'>Tech stack</h3>
              <div className='mt-2'>
                {companyInfo?.skills.map((field) => {
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

          <div className='w-full mt-4 bg-white-900'>
            <div className='p-4'>
              <h2 className='text-[18px] font-bold'>General Information</h2>
            </div>
            <Divider className='m-0 bg-gray-200' />
            <div className='p-4 text-base'>
              <h3 className='font-bold'>Office Address</h3>
              <div className='mt-2 flex gap-2 items-start'>
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
                <p>{companyInfo.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='h-[300px] flex items-center justify-center bg-white-900 text-gray-300 text-lg mt-4 rounded'>
        hello
      </div>

      <div className='h-24 flex items-center justify-center bg-white-900 text-gray-300 text-lg mt-4 rounded'>
        Copyright © APPLANCER JOINT STOCK COMPANY
      </div>

      {companyInfo.images && (
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
                items={prepareImagesForGallery(companyInfo.images)}
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
  );
};

export default CompanyProfile;
