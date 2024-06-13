import {
  AddressSearchEnum,
  AddressTranslation,
  ContractTypeSearchEnum,
  ContractTypeTranslation,
  JobTypeSearchEnum,
  JobTypeTranslation,
  LevekTranslation,
  LevelSearchEnum,
} from '@/+core/enums/searchJob.enum';
import { FilterJobsTypeREQ } from '@/+core/redux/apis/common/job-service/job-service.request';
import { Show } from '@/components/ui/Show';
import { FilterFilled, SearchOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

type ValueType = {
  value: string;
  lable: string;
};

export type FilterType = 'location' | 'level' | 'jobType' | 'contractType';

const recommendations = [
  'Java',
  'C++',
  'JavaScript',
  'UI/UX',
  'C#',
  'Fresher',
  'React',
  'Angular',
  'NodeJS',
  'VueJS',
];

type SearchJobProps = {
  filter?: FilterJobsTypeREQ;
  onSubmit: (values: FilterJobsTypeREQ, searchValue?: string[]) => void;
};

export default function SearchJob({ onSubmit, filter }: SearchJobProps) {
  const { t } = useTranslation();
  const citys: ValueType[] = [
    {
      value: 'ALL',
      lable: t('allLocations'),
    },
    {
      value: 'Hồ Chí Minh',
      lable: t('hcm'),
    },
    {
      value: 'Hà Nội',
      lable: t('hn'),
    },
    {
      value: 'Đà Nẵng',
      lable: t('dn'),
    },
  ];
  const levels: ValueType[] = [
    {
      value: 'INTERN',
      lable: t('intern'),
    },
    {
      value: 'JUNIOR',
      lable: t('junior'),
    },
    {
      value: 'SENIOR',
      lable: t('senior'),
    },
    {
      value: 'FRESHER',
      lable: t('fresher'),
    },
    {
      value: 'MIDDLE',
      lable: t('middle'),
    },
    {
      value: 'LEADER',
      lable: t('leader'),
    },
    {
      value: 'MANAGER',
      lable: t('manager'),
    },
  ];
  const contractTypes: ValueType[] = [
    {
      value: 'FULLTIME',
      lable: t('fulltime'),
    },
    {
      value: 'FREELANCE',
      lable: t('freelance'),
    },
    {
      value: 'PARTTIME',
      lable: t('parttime'),
    },
  ];
  const jobTypes: ValueType[] = [
    {
      value: 'INOFFICE',
      lable: t('inOffice'),
    },
    {
      value: 'HYBRID',
      lable: t('hybrid'),
    },
    {
      value: 'REMOTE',
      lable: t('remote'),
    },
    {
      value: 'OVERSEA',
      lable: t('oversea'),
    },
  ];

  const [form] = Form.useForm();
  const location = useLocation();

  const [searchValue, setSearchValue] = useState<string[]>([]);
  const [address, setAddress] = useState<string>('ALL');
  const [level, setLevel] = useState<string[]>([]);
  const [jobType, setJobType] = useState<string[]>([]);
  const [contractType, setContractType] = useState<string[]>([]);

  const [currentSelect, setCurrentSelect] = useState<FilterType | undefined>(undefined);

  useEffect(() => {
    if (filter) {
      setSearchValue(filter.keywords && filter.keywords !== '' ? filter.keywords.split('-') : []);
      setJobType(filter?.jobTypes && filter?.jobTypes !== '' ? filter.jobTypes.split('-') : []);
      setContractType(
        filter?.contractTypes && filter?.contractTypes !== ''
          ? filter.contractTypes.split('-')
          : [],
      );
      setLevel(filter?.levels && filter?.levels !== '' ? filter.levels.split('-') : []);
      setAddress(filter?.address || 'ALL');
    }
  }, [filter]);

  return (
    <>
      <div className='flex justify-start gap-2 items-center'>
        <div className='text-2xl font-bold text-[#292929]'>Tìm kiếm</div>
        <div className='p-2 bg-primary-red text-2xl text-white-900 font-bold rounded-sm'>
          Javascript
        </div>
      </div>
      <Form
        form={form}
        onFinish={(values) => {
          onSubmit(
            {
              keywords: values?.keywords ? values?.keywords.trim() : undefined,
              address: address,
              levels: level.join('-'),
              contractTypes: contractType.join('-'),
              jobTypes: jobType.join('-'),
              status: 'PUBLIC',
            },
            searchValue,
          );
          form.setFieldValue('keywords', '');
        }}
        autoComplete='off'
        labelAlign='left'
      >
        <div className='relative rounded border border-solid border-white bg-white-900 p-2 shadow-sm'>
          <div className='flex items-center gap-2'>
            <div className='flex-1 flex flex-wrap items-center pl-2 gap-2'>
              <ul className='flex flex-wrap items-center gap-2'>
                {searchValue.map((value, index) => (
                  <li key={index}>
                    <span className='whitespace-nowrap rounded border border-solid font-normal transition-all group/tw-chip inline-flex items-center justify-center gap-0 overflow-hidden hover:gap-2 border-gray-200 bg-iconHover text-black-300 h-[1.625rem] px-2 text-xs md:h-7 md:px-2 md:text-sm lg:h-[2.375rem] lg:px-3 lg:text-base'>
                      {value}
                      <span
                        className='transition-all group-hover/tw-chip:max-w-none cursor-pointer max-w-none overflow-auto mt-1'
                        onClick={() => {
                          setSearchValue((prev) => prev.filter((item) => item !== value));
                        }}
                      >
                        <svg
                          stroke='#424242'
                          fill='#424242'
                          strokeWidth='0'
                          viewBox='0 0 24 24'
                          aria-hidden='true'
                          height='1em'
                          width='1em'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
                            clipRule='evenodd'
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
              <Form.Item name='keywords' className='flex-1'>
                <Input
                  type='text'
                  className='!w-full min-w-[10rem] flex-1 border-none text-sm outline-none focus:border-none focus:outline-none focus:ring-0 lg:text-base'
                  placeholder='Tìm kiếm theo các Kỹ năng, Vị trí, Công ty,...'
                />
              </Form.Item>
            </div>

            <Button
              type='primary'
              className=' !bg-primary-red !text-white !font-bold border-none hover:!bg-secondary-red text-sm lg:!text-base h-9 rounded px-4 lg:h-14 lg:px-8 !leading-[100%] flex items-center'
              icon={<SearchOutlined className='!text-[22px]' />}
              htmlType='submit'
            >
              Tìm kiếm
            </Button>
          </div>
        </div>
      </Form>
      <Show isShow={location.pathname === '/'}>
        <div className='flex gap-4 items-center'>
          <div className='text-base text-[#292929]'>Đề xuất từ khóa:</div>
          {recommendations.map((recommendation, index) => (
            <div
              key={index}
              className='px-3 py-2 border border-[#C2C2C2] text-base bg-white-900 rounded-[4px] hover:bg-[#F5F5F5] cursor-pointer'
            >
              {recommendation}
            </div>
          ))}
        </div>
      </Show>
      <Show isShow={location.pathname === '/it-jobs'}>
        <div className='flex items-center gap-4'>
          <div className='grid grid-cols-4 gap-4 flex-1'>
            <div className='relative select-none whitespace-nowrap'>
              <div
                className={`relative flex cursor-pointer items-center justify-between rounded ${
                  currentSelect === 'location' && 'border border-solid'
                }   px-4 py-2 transition-all border-gray-200 ${
                  address !== 'ALL' ? 'bg-[#424242]' : 'bg-white-900'
                }  h-12`}
                onClick={() => {
                  if (currentSelect !== 'location') setCurrentSelect('location');
                  else setCurrentSelect(undefined);
                }}
              >
                <span
                  className={`flex-1 ${address !== 'ALL' ? 'text-white-900' : 'text-[#424242]'}`}
                >
                  {AddressTranslation(t)[address as AddressSearchEnum]}
                </span>
                <span
                  className={`inline-flex h-6 w-6 items-center justify-center transition-all ease-out ${
                    currentSelect === 'location' && 'rotate-180'
                  }`}
                >
                  <svg
                    stroke={`${address !== 'ALL' ? '#FFFFFF' : '#424242'}`}
                    fill={`${address !== 'ALL' ? '#FFFFFF' : '#424242'}`}
                    strokeWidth='0'
                    viewBox='0 0 320 512'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'></path>
                  </svg>
                </span>
              </div>
              {currentSelect && currentSelect === 'location' && (
                <div className='absolute left-0 top-full z-10 w-full translate-y-1 rounded bg-white-900 py-4 shadow-md transition-all ease-out opacity-100'>
                  <ul>
                    {citys.map((city, index) => (
                      <div
                        className='cursor-pointer'
                        key={index}
                        onClick={() => {
                          setAddress(city.value);
                          setCurrentSelect(undefined);
                        }}
                      >
                        <div className='flex items-center justify-between gap-2 p-4 transition-all hover:bg-gray-100 text-primary'>
                          <span
                            className={`line-clamp-1 flex-1 ${
                              address === city.value && 'text-primary-red'
                            }`}
                          >
                            {city.lable}
                          </span>
                          {address === city.value && (
                            <span className='inline-flex h-5 w-5 items-center justify-center'>
                              <svg
                                stroke='#DD3F24'
                                fill='#DD3F24'
                                strokeWidth='0'
                                viewBox='0 0 24 24'
                                aria-hidden='true'
                                height='1em'
                                width='1em'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  fillRule='evenodd'
                                  d='M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z'
                                  clipRule='evenodd'
                                ></path>
                              </svg>
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className='col-span-1'>
              <div className='relative select-none whitespace-nowrap'>
                <div
                  className={`relative flex cursor-pointer items-center justify-between rounded ${
                    currentSelect === 'level' && 'border border-solid'
                  } px-4 py-2 transition-all border-gray-200 ${
                    level.length >= 1 ? 'bg-[#424242]' : 'bg-white-900'
                  } h-12`}
                  onClick={() => {
                    if (currentSelect !== 'level') setCurrentSelect('level');
                    else setCurrentSelect(undefined);
                  }}
                >
                  <span className={`flex-1 ${level.length ? 'text-white-900' : 'text-[#424242]'}`}>
                    {level.length === 0
                      ? t('allLevels')
                      : level.length === 1
                      ? LevekTranslation(t)[level[0] as LevelSearchEnum]
                      : t('level', { number: level.length })}
                  </span>
                  <span
                    className={`inline-flex h-6 w-6 items-center justify-center transition-all ease-out ${
                      currentSelect === 'level' && 'rotate-180'
                    }`}
                  >
                    <svg
                      stroke={`${level.length ? '#FFFFFF' : '#424242'}`}
                      fill={`${level.length ? '#FFFFFF' : '#424242'}`}
                      strokeWidth='0'
                      viewBox='0 0 320 512'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'></path>
                    </svg>
                  </span>
                </div>
                {currentSelect && currentSelect === 'level' && (
                  <div className='absolute left-0 top-full z-10 w-full translate-y-1 rounded bg-white-900 py-4 shadow-md transition-all ease-out visible opacity-100'>
                    <ul>
                      {levels.map((item, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            if (level.some((i) => i === item.value)) {
                              setLevel((prev) => prev.filter((i) => i !== item.value));
                            } else {
                              setLevel((prev) => [...prev, item.value]);
                            }
                          }}
                          className='cursor-pointer'
                        >
                          <div className='flex items-center justify-between gap-2 p-4 text-sm transition-all hover:bg-gray-100 lg:text-base'>
                            <input
                              checked={level.some((i) => i === item.value)}
                              className='h-5 w-5 rounded outline-none ring-0 checked:bg-primary checked:text-primary-red checked:accent-primary-red focus:border-none focus:shadow-transparent focus:outline-none focus:ring-0'
                              type='checkbox'
                            />
                            <span className='line-clamp-1 flex-1'>{item.lable}</span>
                          </div>
                        </div>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className='col-span-1'>
              <div className='relative select-none whitespace-nowrap'>
                <div
                  className={`relative flex cursor-pointer items-center justify-between rounded ${
                    currentSelect === 'jobType' && 'border border-solid'
                  } px-4 py-2 transition-all border-gray-200 ${
                    jobType.length >= 1 ? 'bg-[#424242]' : 'bg-white-900'
                  } h-12`}
                  onClick={() => {
                    if (currentSelect !== 'jobType') setCurrentSelect('jobType');
                    else setCurrentSelect(undefined);
                  }}
                >
                  <span
                    className={`flex-1 ${jobType.length ? 'text-white-900' : 'text-[#424242]'}`}
                  >
                    {jobType.length === 0
                      ? t('allJobTypes')
                      : jobType.length === 1
                      ? JobTypeTranslation(t)[jobType[0] as JobTypeSearchEnum]
                      : t('jobType', { number: jobType.length })}
                  </span>
                  <span
                    className={`inline-flex h-6 w-6 items-center justify-center transition-all ease-out ${
                      currentSelect === 'jobType' && 'rotate-180'
                    }`}
                  >
                    <svg
                      stroke={`${jobType.length ? '#FFFFFF' : '#424242'}`}
                      fill={`${jobType.length ? '#FFFFFF' : '#424242'}`}
                      strokeWidth='0'
                      viewBox='0 0 320 512'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'></path>
                    </svg>
                  </span>
                </div>
                {currentSelect && currentSelect === 'jobType' && (
                  <div className='absolute left-0 top-full z-10 w-full translate-y-1 rounded bg-white-900 py-4 shadow-md transition-all ease-out visible opacity-100'>
                    <ul>
                      {jobTypes.map((item, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            if (jobType.some((i) => i === item.value)) {
                              setJobType((prev) => prev.filter((i) => i !== item.value));
                            } else {
                              setJobType((prev) => [...prev, item.value]);
                            }
                          }}
                          className='cursor-pointer'
                        >
                          <div className='flex items-center justify-between gap-2 p-4 text-sm transition-all hover:bg-gray-100 lg:text-base'>
                            <input
                              checked={jobType.some((i) => i === item.value)}
                              className='h-5 w-5 rounded outline-none ring-0 checked:bg-primary checked:text-primary-red checked:accent-primary-red focus:border-none focus:shadow-transparent focus:outline-none focus:ring-0'
                              type='checkbox'
                            />
                            <span className='line-clamp-1 flex-1'>{item.lable}</span>
                          </div>
                        </div>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className='col-span-1'>
              <div className='relative select-none whitespace-nowrap'>
                <div
                  className={`relative flex cursor-pointer items-center justify-between rounded ${
                    currentSelect === 'contractType' && 'border border-solid'
                  } px-4 py-2 transition-all border-gray-200 ${
                    contractType.length >= 1 ? 'bg-[#424242]' : 'bg-white-900'
                  } h-12`}
                  onClick={() => {
                    if (currentSelect !== 'contractType') setCurrentSelect('contractType');
                    else setCurrentSelect(undefined);
                  }}
                >
                  <span
                    className={`flex-1 ${
                      contractType.length ? 'text-white-900' : 'text-[#424242]'
                    }`}
                  >
                    {contractType.length === 0
                      ? t('allContractTypes')
                      : contractType.length === 1
                      ? ContractTypeTranslation(t)[contractType[0] as ContractTypeSearchEnum]
                      : t('contractType', { number: contractType.length })}
                  </span>
                  <span
                    className={`inline-flex h-6 w-6 items-center justify-center transition-all ease-out ${
                      currentSelect === 'contractType' && 'rotate-180'
                    }`}
                  >
                    <svg
                      stroke={`${contractType.length ? '#FFFFFF' : '#424242'}`}
                      fill={`${contractType.length ? '#FFFFFF' : '#424242'}`}
                      strokeWidth='0'
                      viewBox='0 0 320 512'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'></path>
                    </svg>
                  </span>
                </div>
                {currentSelect && currentSelect === 'contractType' && (
                  <div className='absolute left-0 top-full z-10 w-full translate-y-1 rounded bg-white-900 py-4 shadow-md transition-all ease-out visible opacity-100'>
                    <ul>
                      {contractTypes.map((item, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            if (contractType.some((i) => i === item.value)) {
                              setContractType((prev) => prev.filter((i) => i !== item.value));
                            } else {
                              setContractType((prev) => [...prev, item.value]);
                            }
                          }}
                          className='cursor-pointer'
                        >
                          <div className='flex items-center justify-between gap-2 p-4 text-sm transition-all hover:bg-gray-100 lg:text-base'>
                            <input
                              checked={contractType.some((i) => i === item.value)}
                              className='h-5 w-5 rounded outline-none ring-0 checked:bg-primary checked:text-primary-red checked:accent-primary-red focus:border-none focus:shadow-transparent focus:outline-none focus:ring-0'
                              type='checkbox'
                            />
                            <span className='line-clamp-1 flex-1'>{item.lable}</span>
                          </div>
                        </div>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          <Button
            onClick={() => {
              setAddress('ALL');
              setLevel([]);
              setJobType([]);
              setContractType([]);
            }}
            type='primary'
            className=' !bg-[#DBDBDB] !text-[#424242] !font-semibold border-none hover:!bg-[#C2C2C2] text-sm lg:!text-base h-9 rounded px-4 lg:h-12 lg:px-6 !leading-[100%] flex items-center'
            icon={<FilterFilled className='!text-[22px]' />}
            htmlType='submit'
          >
            {t('removeFilter')}
          </Button>
        </div>
      </Show>
    </>
  );
}
