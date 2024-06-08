import Container from '@/components/global/Container/Container';
import React from 'react';
import ActivitiesSession from './components/ActivitiesSession';
import AddMoreSession from './components/AddMoreSession';
import AdsSession from './components/AdsSession';
import CertificatesSession from './components/CertificatesSession';
import EducationSession from './components/EducationSession';
import ExpSession from './components/ExpSession';
import HobbiesSession from './components/HobbiesSession';
import LanguagesSession from './components/LanguagesSession';
import OthersSession from './components/OthersSession';
import ProjectsSession from './components/ProjectsSession';
import ReferencesSession from './components/ReferencesSession';
import SkillsSession from './components/SkillsSession';
import SummarySession from './components/SummarySession';
import UserSession from './components/UserSession';
import UserStatusSession from './components/UserStatusSession';

export type ExtendItem = {
  name: string;
  status?: boolean;
};

const list: ExtendItem[] = [
  { name: 'Add languages', status: false },
  { name: 'Add hobbies', status: false },
  { name: 'Add references', status: false },
  { name: 'Add activities', status: false },
  { name: 'Add certificates', status: false },
  { name: 'Add Others', status: false },
];

const MyCV = () => {
  const [extendList, setExtendList] = React.useState<ExtendItem[]>(list);
  const unlockItem = (value: ExtendItem) => {
    const newList = extendList.map((item) => {
      if (item.name === value.name) {
        return { ...item, status: true };
      }
      return item;
    });
    setExtendList(newList);
  };
  return (
    <Container>
      <div className='grid grid-cols-4 gap-6'>
        <div className='col-span-3'>
          {/* part 1 */}
          <UserSession />
          <UserStatusSession />
          <SummarySession />
          <SkillsSession />
          {/* part 2 */}
          <ExpSession />
          <EducationSession />
          <ProjectsSession />
          {/* extends */}
          {extendList.find((item) => item.name === 'Add languages')?.status && <LanguagesSession />}
          {extendList.find((item) => item.name === 'Add hobbies')?.status && <HobbiesSession />}
          {extendList.find((item) => item.name === 'Add references')?.status && (
            <ReferencesSession />
          )}
          {extendList.find((item) => item.name === 'Add activities')?.status && (
            <ActivitiesSession />
          )}
          {extendList.find((item) => item.name === 'Add certificates')?.status && (
            <CertificatesSession />
          )}
          {extendList.find((item) => item.name === 'Add Others')?.status && <OthersSession />}
          <AddMoreSession list={extendList} onClick={unlockItem} />
        </div>

        <div className='col-span-1'>
          <AdsSession />
        </div>
      </div>
    </Container>
  );
};

export default MyCV;
