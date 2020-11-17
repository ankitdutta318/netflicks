import React from 'react';
import Input, { IOptFormInputProps } from './input';
import Button, { IOptFormButtonProps } from './button';
import Text, { IOptFormTextProps } from './text';
import Break, { IOptFormBreakProps } from './break';
import { Container } from './styles';

interface IOptFormComposition {
  Input: React.FC<IOptFormInputProps>;
  Button: React.FC<IOptFormButtonProps>;
  Text: React.FC<IOptFormTextProps>;
  Break: React.FC<IOptFormBreakProps>;
}

const OptForm: React.FC & IOptFormComposition = ({
  children,
  ...restProps
}) => {
  return <Container {...restProps}>{children}</Container>;
};

OptForm.Input = Input;
OptForm.Button = Button;
OptForm.Text = Text;
OptForm.Break = Break;

export default OptForm;
