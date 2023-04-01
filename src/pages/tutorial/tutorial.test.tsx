import React from 'react';
import { render, screen } from '@testing-library/react';
import { Tutorial } from './tutorial';
import {BrowserRouter} from "react-router-dom";

test('renders tutorial page component', () => {
    render(
        <BrowserRouter>
            <Tutorial />
        </BrowserRouter>
    );
});