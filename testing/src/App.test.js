import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App, { sum }from './App';
import { render } from '@testing-library/react';
import Dashboard from './components/DashBoard';

test('renders without crashing again', () => {
  const container = render(<App />);
  console.log(container);
});

test('renders without crashing', () => {
  const wrapper = rtl.render(
    <span className="greet">hello world</span>
  );
  // the querying functionality is accessed through the wrapper:
  const element = wrapper.queryByText(/hello/i);

  // assertions will come in here
});

test('sum returns the sum of two numbers', () => {

  expect(sum(2, 2)).toBe(4);
  expect(sum(2, 3)).toBe(5);
});

test('see if dashboard works', () => {
  render(<Dashboard/>);
});

// test('see if balls works', () => {
//   const { getByTestId } = render(<App />);
//   const linkElement = getByTestId('balls');
//   expect(linkElement).toBeInDocument();

// });