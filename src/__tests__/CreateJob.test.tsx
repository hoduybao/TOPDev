import { describe, it, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ReduxProvider from '@/+core/provider/ReduxProvider';

import { CreateJob } from '../pages/my-company/pages/manage-jobs/create/page';

const MockCreateJob = () => {
  return (
    <ReduxProvider>
      <BrowserRouter>
        <CreateJob />
      </BrowserRouter>
    </ReduxProvider>
  );
};

describe('A truthy statement', () => {
  it('should be equal to 2', () => {
    expect(1 + 1).toEqual(2);
  });
});

describe('Renders create jobs page correctly', async () => {
  it('Should render the create job page correctly', async () => {
    render(<MockCreateJob />);
    const mainTitleEl = screen.getByTestId('create-job-main-title');

    expect(mainTitleEl).toBeInTheDocument();
  });
});

describe('Renders create job recruitment component correctly', async () => {
  it('Should render the create job recruitment component correctly', async () => {
    render(<MockCreateJob />);
    const recruitmentTitleEl = screen.getByTestId('recruitment-title');
    const recruitmentInputEl = screen.getByTestId('recruitment-input');

    expect(recruitmentTitleEl).toBeInTheDocument();
    expect(recruitmentInputEl).toBeInTheDocument();
  });

  it('Should have job title data when create new job', async () => {
    render(<MockCreateJob />);
    const recruitmentTitleEl = screen.getByTestId('recruitment-title');
    const recruitmentInputEl = screen.getByTestId('recruitment-input');
    const createJobbtn = screen.getByTestId('create-job-btn');

    expect(recruitmentTitleEl).toBeInTheDocument();
    expect(recruitmentInputEl).toBeInTheDocument();
    expect(createJobbtn).toBeInTheDocument();

    fireEvent.change(recruitmentInputEl, { target: { value: 'Front end developer' } });
    fireEvent.click(createJobbtn);

    expect(recruitmentInputEl).toHaveValue('Front end developer');
  });
});
