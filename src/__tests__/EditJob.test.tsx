import { describe, it, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ReduxProvider from '@/+core/provider/ReduxProvider';

import { CreateJob } from '../pages/my-company/pages/manage-jobs/create/page';

const MockEditJob = () => {
  return (
    <ReduxProvider>
      <BrowserRouter>
        <CreateJob />
      </BrowserRouter>
    </ReduxProvider>
  );
};

describe('Renders edit jobs page correctly', async () => {
  it('Should render the edit job page correctly', async () => {
    render(<MockEditJob />);
    const mainTitleEl = screen.getByTestId('create-job-main-title');

    expect(mainTitleEl).toBeInTheDocument();
  });
});

describe('Renders edit job recruitment component correctly', async () => {
  it('Should render the create job recruitment component correctly', async () => {
    render(<MockEditJob />);
    const recruitmentTitleEl = screen.getByTestId('recruitment-title');
    const recruitmentInputEl = screen.getByTestId('recruitment-input');

    expect(recruitmentTitleEl).toBeInTheDocument();
    expect(recruitmentInputEl).toBeInTheDocument();
  });

  it('Should have job title data when edit job', async () => {
    render(<MockEditJob />);
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

describe('Error message render', async () => {
  it('Displays error message when recruitment title is not provided', async () => {
    render(<MockEditJob />);
    const finishBtn = screen.getByTestId('create-job-btn');

    fireEvent.click(finishBtn);

    const errorMessage = await screen.findByText('Vui lòng nhập tiêu đề tin tuyển dụng!');
    expect(errorMessage).toBeInTheDocument();
  });
});
