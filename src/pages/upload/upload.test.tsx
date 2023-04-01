import React from 'react';
import { render, screen } from '@testing-library/react';
import { Upload } from './upload';
import {BrowserRouter} from "react-router-dom";

test('renders upload page component', () => {
    render(
        <BrowserRouter>
            <Upload />
        </BrowserRouter>
    );
});