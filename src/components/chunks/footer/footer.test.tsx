import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from './footer';
import {BrowserRouter} from "react-router-dom";

test('renders about page component', () => {
    render(
        <BrowserRouter>
            <Footer />
        </BrowserRouter>
    );
});