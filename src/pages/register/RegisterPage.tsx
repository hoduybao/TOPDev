import React from 'react';
import Advertising from './components/Advertising';
import RegisterSession from './components/RegisterSession';
import Container from '@/components/global/Container/Container';

const RegisterPage = () => {
  return (
    <Container>
      <div className='grid grid-cols-2 gap-4'>
        <Advertising />
        <RegisterSession />
      </div>
    </Container>
  );
};

export default RegisterPage;
