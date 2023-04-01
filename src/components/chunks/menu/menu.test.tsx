import React from 'react';
import { render, screen } from '@testing-library/react';
import { Menu } from './menu';
import {BrowserRouter} from "react-router-dom";

test('renders menu component', () => {
    render(
        <BrowserRouter>
            <Menu />
        </BrowserRouter>
    );
});