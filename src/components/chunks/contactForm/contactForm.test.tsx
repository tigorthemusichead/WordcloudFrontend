import React from 'react';
import { render, screen } from '@testing-library/react';
import { ContactForm } from './contactForm';
import {BrowserRouter} from "react-router-dom";

test('renders contact component', () => {
    render(
        <BrowserRouter>
            <ContactForm />
        </BrowserRouter>
    );
});