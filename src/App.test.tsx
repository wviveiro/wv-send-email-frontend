import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './App';

describe("Main Application", () => {
	test('renders without crashing', () => {
		const div = document.createElement('div');

		act(() => {
			ReactDOM.render(<App />, div);
		});
	});
});
