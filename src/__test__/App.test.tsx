import LoginPage from '@/pages/login/LoginPage';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

test('demo', () => {
  expect(true).toBe(true);
});

test('Renders the login page', () => {
  render(<LoginPage />);
  const textElement = screen.getByText('Ứng viên');
  expect(textElement).toBeInTheDocument;
});
