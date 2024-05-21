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

const testAntDesignSelect = (container: HTMLElement, index: number, firstValue: string) => {
  const selects: any = container.querySelectorAll('.ant-select-selector');
  const techStackSelect = selects[index];

  expect(techStackSelect).toBeInTheDocument();

  // Open the dropdown
  fireEvent.mouseDown(techStackSelect);

  // Wait for the options to be rendered in the document
  const techStackItems = document.querySelectorAll('.ant-select-item-option-content').length;
  expect(techStackItems).toBeGreaterThan(0);

  // Get the options
  const options = document.querySelectorAll('.ant-select-item-option-content');

  // Check if options are rendered
  expect(options.length).toBeGreaterThan(0);

  // Click on the first option
  fireEvent.click(options[0]);

  // Assert that the first option is selected
  expect(techStackSelect.textContent).toContain(firstValue);
};

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

describe('Renders edit job tech stack component correctly', async () => {
  it('Should render the create job tech stack component correctly', () => {
    render(<MockEditJob />);
    const techStackTitle = screen.getByTestId('tech-stack-title');
    const techStackSelect = screen.getByTestId('tech-stack-select');

    expect(techStackTitle).toBeInTheDocument();
    expect(techStackSelect).toBeInTheDocument();
  });

  it('Should have job tech stack data when edit job', async () => {
    const { container } = render(<MockEditJob />);

    testAntDesignSelect(container, 0, 'Javascript');
  });
});

describe('Renders edit job main information component correctly', async () => {
  it('Should render the create job main information component correctly', () => {
    render(<MockEditJob />);
    const techStackTitle = screen.getByText('Thông tin chung');

    expect(techStackTitle).toBeInTheDocument();
  });

  it('Should have job tech main information when edit job', async () => {
    const { container } = render(<MockEditJob />);
    const addressInputEl = screen.getByTestId('address-input');

    testAntDesignSelect(container, 1, 'In office');
    testAntDesignSelect(container, 2, 'Loại công việc');
    testAntDesignSelect(container, 3, 'Cấp bậc');
    testAntDesignSelect(container, 4, 'Chưa có kinh nghiệm');
    testAntDesignSelect(container, 5, 'Chọn loại tiền tệ');
    testAntDesignSelect(container, 6, 'Chọn kiểu lương');
    testAntDesignSelect(container, 7, 'Chọn tỉnh/thành phố');
    testAntDesignSelect(container, 8, 'Chọn quận/huyện');

    fireEvent.change(addressInputEl, { target: { value: '227 Nguyễn Văn Cừ' } });
    expect(addressInputEl).toHaveValue('227 Nguyễn Văn Cừ');
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
