import React from 'react';
import { Input } from './styles';

export interface IOptFormInputProps {
  placeholder?: string;
}

const OptFormInput: React.FC<IOptFormInputProps> = ({ ...restProps }) => {
  return <Input {...restProps} />;
};

export default OptFormInput;
