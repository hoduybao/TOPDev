import React from 'react';

const selectedClass = 'font-bold text-orange-600 border-b-4 border-orange-600';

const JobItem = ({
  alias,
  name,
  onClick = () => {},
  clicked = false,
}: {
  alias: string;
  name: string;
  onClick?: () => void;
  clicked?: boolean;
}) => {
  return (
    <div
      id={alias}
      onClick={onClick}
      className={`
      ${clicked && selectedClass}
      py-4 text-base col-span-6 text-center hover:cursor-pointer`}
    >
      {name}
    </div>
  );
};

const JobTags = ({
  jdClicked,
  changeClicked,
  companyRef,
  jdRef,
}: {
  jdClicked: boolean;
  changeClicked: (value: boolean) => void;
  jdRef: React.RefObject<HTMLDivElement>;
  companyRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    // sticky z-10 top-[170px]
    <div className={`grid grid-cols-12 bg-white-900 shadow-md rounded rounded-b-none`}>
      <JobItem
        alias='jdTag'
        onClick={() => {
          jdRef.current?.scrollIntoView({ behavior: 'smooth' });
          changeClicked(true);
        }}
        name='Mô tả công việc'
        clicked={jdClicked}
      />
      <JobItem
        alias='companyTag'
        onClick={() => {
          companyRef.current?.scrollIntoView({ behavior: 'smooth' });
          changeClicked(false);
        }}
        name='Giới thiệu về công ty'
        clicked={!jdClicked}
      />
    </div>
  );
};

export default JobTags;
