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

const testReactQuill = (container: HTMLElement, name: string) => {
  const quillEditor: any = container.querySelector(name);

  // Check if the editor is in the document
  expect(quillEditor).toBeInTheDocument();

  // Simulate typing some text into the editor
  fireEvent.input(quillEditor, {
    target: { innerHTML: 'Hello, world!' },
  });

  // Wait for the editor content to be updated
  expect(quillEditor.innerHTML).toBe('Hello, world!');
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

describe('Renders edit job tech stack component correctly', () => {
  it('Should render the create job tech stack component correctly', () => {
    render(<MockEditJob />);
    const techStackTitle = screen.getByTestId('tech-stack-title');
    const techStackSelect = screen.getByTestId('tech-stack-select');

    expect(techStackTitle).toBeInTheDocument();
    expect(techStackSelect).toBeInTheDocument();
  });

  it('Should have job tech stack data when edit job', () => {
    const { container } = render(<MockEditJob />);

    testAntDesignSelect(container, 0, 'Javascript');
  });
});

describe('Renders edit job main information component correctly', () => {
  it('Should render the create job main information component correctly', () => {
    render(<MockEditJob />);
    const techStackTitle = screen.getByText('Thông tin chung');

    expect(techStackTitle).toBeInTheDocument();
  });

  it('Should have job tech main information when edit job', () => {
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

describe('Renders edit job skill requirements component correctlyy', () => {
  it('Updates content when typing in React Quill editor', () => {
    const { container } = render(<MockEditJob />);
    const interviewProcessTitle = screen.getByText('Kỹ năng & Chuyên môn');

    expect(interviewProcessTitle).toBeInTheDocument();

    testReactQuill(container, '.skill-quill');
  });
});

describe('Renders edit job benefit component correctlyy', () => {
  it('Updates content when typing in React Quill editor', () => {
    const { container } = render(<MockEditJob />);
    const interviewProcessTitle = screen.getByText('Quyền lợi ứng viên');

    expect(interviewProcessTitle).toBeInTheDocument();

    testReactQuill(container, '.benefit-quill');
  });
});

describe('Renders edit job interview process component correctlyy', () => {
  it('Updates content when typing in React Quill editor', () => {
    const { container } = render(<MockEditJob />);
    const interviewProcessTitle = screen.getByText('Quy trình phỏng vấn');

    // Check if the editor is in the document
    expect(interviewProcessTitle).toBeInTheDocument();

    testReactQuill(container, '.interview-process-quill');
  });
});
