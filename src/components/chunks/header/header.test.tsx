import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './header';
import {BrowserRouter} from "react-router-dom";

test('renders header component', () => {
    render(
        <BrowserRouter>
                <Header />
        </BrowserRouter>
    );
});
