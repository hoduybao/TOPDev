import SkillsModal from './SkillsModal';

const SkillsList = ({ skills, title }: { title: string; skills: string[] }) => {
  return (
    <div className='my-2'>
      <h3 className='font-semibold text-lg mb-2'>{title}</h3>
      <div className='flex gap-2 bg-gray-100 p-2'>
        {skills.map((skill: string) => {
          return (
            <div
              key={skill}
              className='px-2 py-[0.15rem] bg-white-900 rounded border-[1px] border-gray-300 text-black-600'
            >
              {skill}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const SkillsSession = () => {
  return (
    <div className='rounded bg-white-900 mb-4'>
      <div className='flex-1'>
        <div className='p-4 flex gap-4 justify-between'>
          <div>
            <h3 className='text-2xl font-bold text-black-900'>Skills</h3>
            <p className='text-gray-400 text-base'>
              Choose skills that show you are fit the position to helps you catch the employers eyes
              to match you as a good fit.
            </p>
          </div>
          <SkillsModal />
        </div>
        <div className='border-[1px] border-gray-200 mt-4'></div>
        <div className='p-4'>
          <SkillsList title='Technical skills' skills={['JS', 'C++', 'Java']} />
          <SkillsList title='Soft skills ( optional )' skills={['JS', 'C++', 'Java']} />
        </div>
      </div>
    </div>
  );
};

export default SkillsSession;
