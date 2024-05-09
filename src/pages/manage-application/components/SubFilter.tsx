import Container from '@/components/global/Container/Container';
import { Radio } from 'antd';
import React from 'react';

const SubFilter = () => {
  const foundCandidates = 747;
  const options = [
    { label: 'Hiển thị tất cả CV', value: 'ALL' },
    { label: 'Chỉ hiển thị CV chưa xem', value: 'PENDING' },
  ];

  const [filterValue, setFilterValue] = React.useState(options[0].value);

  return (
    <Container>
      <div className='flex justify-between'>
        <div>
          Tìm thấy <span className='text-green-500 font-bold'>{foundCandidates}</span> ứng viên
        </div>
        <Radio.Group
          className='text-green-500'
          options={options}
          onChange={({ target: { value } }) => {
            setFilterValue(value);
          }}
          value={filterValue}
        />
      </div>
    </Container>
  );
};

export default SubFilter;
