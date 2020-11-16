import React from 'react';
import { Text } from './styles';

export interface IFooterTextProps {
  children: React.ReactNode;
}

const FooterText: React.FC<IFooterTextProps> = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

export default FooterText;
