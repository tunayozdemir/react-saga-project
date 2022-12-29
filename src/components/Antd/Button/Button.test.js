/* eslint-disable no-undef */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import Button from "./Button"

it('Button onClick', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>)

    fireEvent.click(screen.getByText(/click me/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
})
