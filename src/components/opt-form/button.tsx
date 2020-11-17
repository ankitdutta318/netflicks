import React from 'react';
import { Button } from './styles';

export interface IOptFormButtonProps {
  children?: React.ReactNode;
}

const OptFormButton: React.FC<IOptFormButtonProps> = ({
  children,
  ...restProps
}) => {
  return (
    <Button {...restProps}>
      {children} <img src='/images/icons/chevron-right.png' alt='Try Now' />
    </Button>
  );
};

export default OptFormButton;
