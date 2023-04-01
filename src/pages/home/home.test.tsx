import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from './home';
import {BrowserRouter} from "react-router-dom";

test('renders home page component', () => {
    render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    );
});