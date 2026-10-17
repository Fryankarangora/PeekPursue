// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PeekPursue title', () => {
    render(<App />);
    const titleElement = screen.getByText(/PeekPursue/i);
    expect(titleElement).toBeInTheDocument();
});
