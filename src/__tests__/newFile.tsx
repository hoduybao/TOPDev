import { describe, it, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import { MockEditJob } from './EditJob.test';

describe('Renders edit jobs page correctly', () => {
  it('Should render the edit job page correctly', () => {
    render(<MockEditJob />);
    const mainTitleEl = screen.getByTestId('create-job-main-title');
    const subTitleEl = screen.getByText(
      'Tin tuyển dụng của bạn sẽ được kiểm duyệt trước khi hiển thị với các ứng viên tiềm năng.',
    );
    const createJobbtn = screen.getByTestId('create-job-btn');
    const cancelBtn = screen.getByTestId('cancel-btn');

    expect(mainTitleEl).toBeInTheDocument();
    expect(subTitleEl).toBeInTheDocument();
    expect(createJobbtn).toBeInTheDocument();
    expect(cancelBtn).toBeInTheDocument();
  });
});
describe('Renders edit job recruitment component correctly', () => {
  it('Should render the create job recruitment component correctly', () => {
    render(<MockEditJob />);
    const recruitmentTitleEl = screen.getByTestId('recruitment-title');
    const recruitmentInputEl = screen.getByTestId('recruitment-input');

    expect(recruitmentTitleEl).toBeInTheDocument();
    expect(recruitmentInputEl).toBeInTheDocument();
  });

  it('Should have job title data when edit job', () => {
    render(<MockEditJob />);
    const recruitmentTitleEl = screen.getByTestId('recruitment-title');
    const recruitmentInputEl = screen.getByTestId('recruitment-input');

    expect(recruitmentTitleEl).toBeInTheDocument();
    expect(recruitmentInputEl).toBeInTheDocument();

    fireEvent.change(recruitmentInputEl, { target: { value: 'Front end developer' } });

    expect(recruitmentInputEl).toHaveValue('Front end developer');
  });
});
