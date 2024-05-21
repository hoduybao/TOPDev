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

describe('Error message render', async () => {
  it('Displays error message when recruitment title is not provided', async () => {
    render(<MockEditJob />);
    const finishBtn = screen.getByTestId('create-job-btn');

    fireEvent.click(finishBtn);

    const errorMessage = await screen.findByText('Vui lòng nhập tiêu đề tin tuyển dụng!');
    expect(errorMessage).toBeInTheDocument();
  });

  it('Displays error message when working type is not provided', async () => {
    render(<MockEditJob />);
    const finishBtn = screen.getByTestId('create-job-btn');

    fireEvent.click(finishBtn);

    const errorMessage = await screen.findByText('Vui lòng chọn hình thức làm việc!');
    expect(errorMessage).toBeInTheDocument();
  });

  it('Displays error message when job type is not provided', async () => {
    render(<MockEditJob />);
    const finishBtn = screen.getByTestId('create-job-btn');

    fireEvent.click(finishBtn);

    const errorMessage = await screen.findByText('Vui lòng chọn loại công việc!');
    expect(errorMessage).toBeInTheDocument();
  });

  it('Displays error message when job level is not provided', async () => {
    render(<MockEditJob />);
    const finishBtn = screen.getByTestId('create-job-btn');

    fireEvent.click(finishBtn);

    const errorMessage = await screen.findByText('Vui lòng chọn cấp bậc!');
    expect(errorMessage).toBeInTheDocument();
  });

  it('Displays error message when job date is not provided', async () => {
    render(<MockEditJob />);
    const finishBtn = screen.getByTestId('create-job-btn');

    fireEvent.click(finishBtn);

    const errorMessage = await screen.findByText('Vui lòng chọn thời gian hiển thị!');
    expect(errorMessage).toBeInTheDocument();
  });

  it('Displays error message when job salary currency is not provided', async () => {
    render(<MockEditJob />);
    const finishBtn = screen.getByTestId('create-job-btn');

    fireEvent.click(finishBtn);

    const errorMessage = await screen.findByText('Vui lòng chọn loại tiền tệ!');
    expect(errorMessage).toBeInTheDocument();
  });

  it('Displays error message when job salary type is not provided', async () => {
    render(<MockEditJob />);
    const finishBtn = screen.getByTestId('create-job-btn');

    fireEvent.click(finishBtn);

    const errorMessage = await screen.findByText('Vui lòng chọn kiểu lương!');
    expect(errorMessage).toBeInTheDocument();
  });

  it('Displays error message when city is not provided', async () => {
    render(<MockEditJob />);
    const finishBtn = screen.getByTestId('create-job-btn');

    fireEvent.click(finishBtn);

    const errorMessage = await screen.findByText('Vui lòng chọn tỉnh/thành phố!');
    expect(errorMessage).toBeInTheDocument();
  });

  it('Displays error message when dictrict is not provided', async () => {
    render(<MockEditJob />);
    const finishBtn = screen.getByTestId('create-job-btn');

    fireEvent.click(finishBtn);

    const errorMessage = await screen.findByText('Vui lòng chọn quận/huyện!');
    expect(errorMessage).toBeInTheDocument();
  });

  it('Displays error message when address is not provided', async () => {
    render(<MockEditJob />);
    const finishBtn = screen.getByTestId('create-job-btn');

    fireEvent.click(finishBtn);

    const errorMessage = await screen.findByText('Vui lòng nhập địa chỉ cụ thể!');
    expect(errorMessage).toBeInTheDocument();
  });
});
