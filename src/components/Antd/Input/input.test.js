/* eslint-disable no-undef */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Input from './Input';

afterEach(cleanup);

it('Test Component Set Value', () => {
  const { getByDisplayValue } = render(
    <Input value="test" />,
  );

  expect(getByDisplayValue('test')).toBeTruthy();
});
