import React from 'react';
import { render, screen } from '@testing-library/react';
import { InfoCard } from './infoCard';
import {BrowserRouter} from "react-router-dom";

test('renders info card component', () => {
    render(
        <BrowserRouter>
            <InfoCard />
        </BrowserRouter>
    );
});