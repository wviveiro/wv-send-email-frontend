import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './index';

describe("VIEW HOME", () => {
    test('renders learn react link', () => {
        render(<Home />);
        const linkElement = screen.getByText(/Ready to send an email?/i);
        expect(linkElement).toBeInTheDocument();
      });
});

