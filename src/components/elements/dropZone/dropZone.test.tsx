import React from 'react';
import { render, screen } from '@testing-library/react';
import { DropZone } from './dropZone';
import {BrowserRouter} from "react-router-dom";

test('renders drop zone component', () => {
    render(
        <BrowserRouter>
            <DropZone
                onLoad={(file) => {}}
                onError={(error) => {}}
                accept={{'application/json': ['.json']}}
            >
                test
            </DropZone>
        </BrowserRouter>
    );
});