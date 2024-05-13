import { v4 as uuidv4 } from 'uuid';

export type Project = {
  name: string;
  position: string;
  description: string;
  timeline: string;
};

const projects: Project[] = [
  {
    name: 'Project 1',
    position: 'Fullstack Developer',
    description: 'I am a developer',
    timeline: '2020 - 2021',
  },
  {
    name: 'Project 2',
    position: 'Frontend Developer',
    description: 'I am a developer',
    timeline: '2021 - 2022',
  },
];

const ProjectItem = ({ project }: { project: Project }) => {
  const { name, description, position, timeline } = project;
  return (
    <div className='flex gap-2'>
      <p className='text-base text-gray-400 w-[20%]'>{timeline}</p>
      <div className='flex-1'>
        <h3 className='text-base font-semibold'>{name}</h3>
        <h4 className='text-base text-orange-500'>{position}</h4>
        <p
          className='text-base text-gray-400'
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
    </div>
  );
};

const ProjectsSession = () => {
  return (
    <div className='rounded bg-white-900 mb-4'>
      <div className='flex-1'>
        <div className='p-4 flex gap-4 justify-between'>
          <div>
            <h3 className='text-2xl font-bold text-black-900'>Projects</h3>
          </div>
        </div>
        <div className='border-[1px] border-gray-200 mt-4'></div>
        <div className='p-4 flex gap-4 flex-col'>
          {projects.map((project: Project) => {
            return <ProjectItem key={uuidv4()} project={project} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSession;
