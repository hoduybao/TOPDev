import { v4 as uuidv4 } from 'uuid';

export type Language = {
  name: string;
  level: string;
};

const data: Language[] = [
  {
    name: 'English',
    level: 'Native',
  },
  {
    name: 'Vietnamese',
    level: 'Native',
  },
];

const LanguageItem = ({ language }: { language: Language }) => {
  const { name, level } = language;
  return (
    <div className='flex gap-2 justify-between p-2'>
      <div className='text-base font-bold'>{name}</div>
      <div className='text-base text-gray-400'>{level}</div>
    </div>
  );
};

const LanguageSection = () => {
  return (
    <div className='rounded bg-white-900 mb-4'>
      <div className='flex-1'>
        <div className='p-4 flex gap-4 justify-between'>
          <div>
            <h3 className='text-2xl font-bold text-black-900'>Languages</h3>
          </div>
        </div>
        <div className='border-[1px] border-gray-200 mt-4'></div>
        <div className='p-4 flex gap-4 flex-col'>
          {data.map((lang: Language) => {
            return <LanguageItem key={uuidv4()} language={lang} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default LanguageSection;
