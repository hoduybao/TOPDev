import ActivitiesSection from './components/candidate-profile/ActivitiesSection';
import CertificatesSection from './components/candidate-profile/CertificateSection';
import EducationSection from './components/candidate-profile/EducationSection';
import ExperienceSection from './components/candidate-profile/ExperienceSection';
import HobbiesSection from './components/candidate-profile/HobbiesSection';
import LanguageSection from './components/candidate-profile/LanguageSection';
import ProjectSection from './components/candidate-profile/ProjectSection';
import ReferencesSection from './components/candidate-profile/ReferencesSection';
import SkillsSection from './components/candidate-profile/SkillsSection';
import SummarySection from './components/candidate-profile/SummarySection';
import UserSection from './components/candidate-profile/UserSection';

const CandidateProfile = () => {
  return (
    <div className='px-5 py-4 max-w-[1200px] mx-auto'>
      <UserSection />

      <div className='mt-4'>
        <SummarySection />
      </div>

      <div className='mt-4'>
        <SkillsSection />
      </div>

      <div className='mt-4'>
        <ExperienceSection />
      </div>

      <div className='mt-4'>
        <EducationSection />
      </div>

      <div className='mt-4'>
        <ProjectSection />
      </div>

      <div className='mt-4'>
        <LanguageSection />
      </div>

      <div className='mt-4'>
        <HobbiesSection />
      </div>

      <div className='mt-4'>
        <ReferencesSection />
      </div>

      <div className='mt-4'>
        <ActivitiesSection />
      </div>

      <div className='mt-4'>
        <CertificatesSection />
      </div>
    </div>
  );
};

export default CandidateProfile;
