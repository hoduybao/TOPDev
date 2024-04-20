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
import LanguagesSession from './components/LanguagesSession';
import HobbiesSession from './components/HobbiesSession';
import ReferencesSession from './components/ReferencesSession';
import ActivitiesSession from './components/ActivitiesSession';
import CertificatesSession from './components/CertificatesSession';
import OthersSession from './components/OthersSession';

export type ExtendItem = {
  name: string;
  status?: boolean;
};

const list: ExtendItem[] = [
  { name: 'Add languages', status: true },
  { name: 'Add hobbies', status: true },
  { name: 'Add references', status: true },
  { name: 'Add activities', status: true },
  { name: 'Add certificates', status: true },
  { name: 'Add Others', status: true },
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
      <div className='grid grid-cols-4 gap-6 mt-8'>
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
