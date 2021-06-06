import React from 'react';
import { render, screen } from '@testing-library/react';
import Router from './index';

describe("Router", () => {
    test('renders learn react link', () => {
        render(<Router />);
        const linkElement = screen.getByText(/Ready to send an email?/i);
        expect(linkElement).toBeInTheDocument();
      });
});

