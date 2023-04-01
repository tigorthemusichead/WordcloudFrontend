import React from 'react';
import { render, screen } from '@testing-library/react';
import { Layout } from './layout';
import {BrowserRouter} from "react-router-dom";

test('renders default layout', () => {
    render(
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
            );
});
