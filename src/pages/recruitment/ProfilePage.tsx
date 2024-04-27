import { useTranslation } from 'react-i18next';
import { Button, Form, Card, Input } from 'antd';

import { type FormProps } from 'antd';

import ProfileSubHeader from '@/components/global/Recruitment/Header/ProfileSubHeader';
import { useState } from 'react';
import TextContentEditor from '../../components/global/Recruitment/Content/TextContentEditor';
import { CompanyType } from '@/+core/utilities/types/recruitment.type';

type FieldType = {
  companyName?: string;
  phone?: string;
  email?: string;
  website?: string;
  nation?: string;
  address?: string;
  about?: string;
};

const AboutMock =
  '<p class="ql-align-justify">Đổi tên từ&nbsp;<strong style="color: var(--tw-prose-bold);">Công ty Cổ phần Chuyển mạch Tài chính Quốc gia Việt Nam (Banknetvn)</strong>&nbsp;kể từ ngày 04/02/2016, trên cơ sở sáp nhập với Công ty CP Dịch vụ thẻ Smartlink để xây dựng Trung tâm chuyển mạch thẻ thống nhất theo chỉ đạo của Thủ tướng Chính phủ và Ngân hàng Nhà nước Việt Nam. Là đơn vị xây dựng và hoàn thiện hạ tầng thanh toán bán lẻ quốc gia, NAPAS được Ngân hàng Nhà nước cấp phép cung ứng dịch vụ chuyển mạch tài chính và dịch vụ bù trừ điện tử tại Việt Nam. Cổ đông lớn nhất của NAPAS là Ngân hàng Nhà nước, chiếm 49% vốn điều lệ của Công ty.</p><p class="ql-align-justify">NAPAS hiện đang quản trị và vận hành hệ thống chuyển mạch kết nối liên thông hơn 17.000 máy ATM, 270.000 máy POS, 300 doanh nghiệp thanh toán điện tử trong các lĩnh vực hàng không, viễn thông, khách sạn, du lịch; phục vụ hơn 100 triệu chủ thẻ của 46 ngân hàng thương mại trong nước và quốc tế đang hoạt động tại Việt Nam.</p><p><br></p>';

const ProfilePage = () => {
  const { t } = useTranslation();

  const [RecruitmentProfileForm] = Form.useForm();
  const [about, setAbout] = useState<string>(AboutMock);

  const onEditFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    const company: CompanyType = {
      name: values?.companyName,
      phone: values?.phone,
      email: values?.email,
      website: values?.website,
      address: values?.address,
      nation: values?.nation,
      about: about,
    };

    console.log('Success:', company);
  };

  const onEditFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='flex flex-col'>
      <ProfileSubHeader />
      <div className='p-4'>
        <Card className='w-full' title='Recruitment 01'>
          <div className='flex flex-wrap'>
            <Form
              form={RecruitmentProfileForm}
              name='recruitment-profile'
              className='w-[100%] mt-5 pr-5 flex flex-col gap-5'
              labelCol={{ span: 24 }} // 5
              wrapperCol={{ span: 24 }} // 16
              onFinish={onEditFinish}
              onFinishFailed={onEditFinishFailed}
              initialValues={{
                ['companyName']: 'DTS Software Viet Nam',
                ['phone']: '0932123456',
                ['email']: 'napas@recruitment.com',
                ['website']: 'https://napas.com.vn',
                ['nation']: 'Vietnam',
                ['address']: '83 Lý Thường Kiệt, Quận Hoàn Kiếm, Thành phố Hà Nội',
              }}
            >
              <div className='flex flex-wrap gap-5'>
                <div className='w-[100%] md:w-[48%] flex flex-col gap-5'>
                  <Form.Item<FieldType>
                    label={`${t('recruitmentCompanyName')}`}
                    name='companyName'
                    rules={[{ required: true, message: 'Please input company name!' }]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item<FieldType>
                    label={`${t('recruitmentPhone')}`}
                    name='phone'
                    rules={[{ required: true, message: 'Please input company phone!' }]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item<FieldType>
                    label={`${t('recruitmentEmail')}`}
                    name='email'
                    rules={[{ required: true, message: 'Please input company email!' }]}
                  >
                    <Input />
                  </Form.Item>
                </div>
                <div className='w-[100%] md:w-[48%] flex flex-col gap-5'>
                  <Form.Item<FieldType>
                    label={`${t('recruitmentWebsite')}`}
                    name='website'
                    rules={[{ required: true, message: 'Please input company website!' }]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item<FieldType>
                    label={`${t('recruitmentNation')}`}
                    name='nation'
                    rules={[{ required: true, message: 'Please input company nation!' }]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item<FieldType>
                    label={`${t('recruitmentAddress')}`}
                    name='address'
                    rules={[{ required: true, message: 'Please input company address!' }]}
                  >
                    <Input />
                  </Form.Item>
                </div>
              </div>

              <Form.Item<FieldType> label={`${t('recruitmentAbout')}`} name='about'>
                <TextContentEditor content={about} setContent={setAbout} />
              </Form.Item>

              <Form.Item wrapperCol={{ span: 24 }}>
                <div className='w-full border-t border-gray-300 mt-5 pt-4 flex items-center gap-2'>
                  <Button type='primary' htmlType='submit' danger>
                    {t('recruitmentEditJob')}
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
