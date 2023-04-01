import React from 'react';
import { render, screen } from '@testing-library/react';
import { About } from './about';
import {BrowserRouter} from "react-router-dom";

test('renders about page component', () => {
    render(
        <BrowserRouter>
            <About />
        </BrowserRouter>
    );
});