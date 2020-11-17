import React from 'react';
import { Text } from './styles';

export interface IOptFormTextProps {
  children?: React.ReactNode;
}

const OptFormText: React.FC<IOptFormTextProps> = ({ ...restProps }) => {
  return <Text {...restProps} />;
};

export default OptFormText;
