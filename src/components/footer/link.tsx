import React from 'react';
import { Link } from './styles';

export interface IFooterLinkProps {
  children: React.ReactNode;
}

const FooterLink: React.FC<IFooterLinkProps> = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>;
};

export default FooterLink;
