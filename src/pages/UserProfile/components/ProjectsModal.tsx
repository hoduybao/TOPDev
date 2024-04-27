import React from 'react';
import { Project } from './ProjectsSession';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import ProjectModal from './ProjectModal';

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
    <div className='flex justify-between bg-gray-100 p-4 rounded'>
      <div>
        <h3 className='text-base font-semibold'>{name}</h3>
        <h4 className='text-base text-orange-500'>{position}</h4>
        <p className='text-base text-gray-400'>{timeline}</p>
      </div>

      <div className='flex gap-4'>
        <ProjectModal isEdit initValue={project} handleChange={() => {}} />
        <DeleteOutlined className='text-base' />
      </div>
    </div>
  );
};

const ProjectsModal = () => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  return (
    <>
      <EditOutlined className='font-base' onClick={() => setIsModalOpen(true)} />
      <Modal
        title={
          <div className='py-4'>
            <h3 className='text-xl text-black-900'>Project</h3>
          </div>
        }
        width={'50%'}
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
      >
        <div className='flex flex-col gap-2'>
          {projects.map((project) => {
            return <ProjectItem key={uuidv4()} project={project} />;
          })}
        </div>
        <ProjectModal handleChange={() => {}} />
      </Modal>
    </>
  );
};

export default ProjectsModal;
