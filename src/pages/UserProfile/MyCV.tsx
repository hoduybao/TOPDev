import Container from '@/components/global/Container/Container';
import React from 'react';
import UserSession from './components/UserSession';
import UserStatusSession from './components/UserStatusSession';
import SummarySession from './components/SummarySession';
import SkillsSession from './components/SkillsSession';
import ExpSession from './components/ExpSession';
import EducationSession from './components/EducationSession';
import ProjectsSession from './components/ProjectsSession';
import AddMoreSession from './components/AddMoreSession';
import AdsSession from './components/AdsSession';

const MyCV = () => {
  return (
    <Container>
      <div className='grid grid-cols-4 gap-4'>
        <div className='col-span-3'>
          <UserSession />
          <UserStatusSession />
          <SummarySession />
          <SkillsSession />
          <ExpSession />
          <EducationSession />
          <ProjectsSession />
          <AddMoreSession />
        </div>

        <div className='col-span-1'>
          <AdsSession />
        </div>
      </div>
    </Container>
  );
};

export default MyCV;
