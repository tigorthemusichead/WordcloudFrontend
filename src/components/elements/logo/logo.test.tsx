import React from 'react';
import { render, screen } from '@testing-library/react';
import { Logo } from './logo';

test('renders home page component', () => {
    render(<Logo />);
});