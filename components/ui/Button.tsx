'use client';

import { Button as MuiButton } from '@mui/material';
import { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { forwardRef } from 'react';

export interface ButtonProps extends Omit<MuiButtonProps, 'classes'> {
  className?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <MuiButton
        ref={ref}
        className={`rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button'; 