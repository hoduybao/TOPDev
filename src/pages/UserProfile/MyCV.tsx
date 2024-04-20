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
          <AddMoreSession list={extendList} onClick={unlockItem} />
          {/* extends */}
        </div>

        <div className='col-span-1'>
          <AdsSession />
        </div>
      </div>
    </Container>
  );
};

export default MyCV;
