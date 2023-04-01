import React from 'react';
import { render, screen } from '@testing-library/react';
import { UploadForm } from './uploadForm';
import {BrowserRouter} from "react-router-dom";

test('renders upload form component', () => {
    render(
        <BrowserRouter>
            <UploadForm />
        </BrowserRouter>
    );
});