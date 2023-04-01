import React from 'react';
import { render, screen } from '@testing-library/react';
import { LanguageSelect } from './languageSelect';
import {BrowserRouter} from "react-router-dom";

test('renders language select component', () => {
    render(
        <BrowserRouter>
            <LanguageSelect />
        </BrowserRouter>
    );
});