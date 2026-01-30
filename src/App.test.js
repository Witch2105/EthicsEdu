// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EthicsEdu title', () => {
    render(<App />);
    const titleElement = screen.getByText(/EthicsEdu/i);
    expect(titleElement).toBeInTheDocument();
});
