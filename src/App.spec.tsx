import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders headline text', () => {
    render(<App />);
    const headlineElement = screen.getByRole('heading', { level: 2 });
    expect(headlineElement).toHaveTextContent('React 19 Vite Starter');
  });
});
