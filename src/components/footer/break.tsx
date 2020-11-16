import React from 'react';
import { Break } from './styles';

export interface IFooterBreakProps {
  children: React.ReactNode;
}

const FooterBreak: React.FC<IFooterBreakProps> = ({ ...restProps }) => {
  return <Break {...restProps} />;
};

export default FooterBreak;
