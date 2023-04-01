import React from 'react';
import { render, screen } from '@testing-library/react';
import { Contact } from './contact';
import {BrowserRouter} from "react-router-dom";

test('renders contact component', () => {
    render(
        <BrowserRouter>
            <Contact />
        </BrowserRouter>
    );
});