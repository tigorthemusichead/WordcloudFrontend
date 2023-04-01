import React from 'react';
import { render, screen } from '@testing-library/react';
import { ResponsiveSection } from './responsiveSection';
import {BrowserRouter} from "react-router-dom";

test('renders responsiveSection component', () => {
    render(
        <BrowserRouter>
            <ResponsiveSection/>
        </BrowserRouter>
    );
});
