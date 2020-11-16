import React from 'react';
import { Column } from './styles';
import { IFooterLinkProps } from './link';

export interface IFooterColumnProps {
  children: React.ReactNode;
}

export interface IFooterColumnComposition {
  Link?: React.FC<IFooterLinkProps>;
}

const FooterColumn: React.FC<IFooterColumnProps> & IFooterColumnComposition = ({
  children,
  ...restProps
}) => {
  return <Column {...restProps}>{children}</Column>;
};

export default FooterColumn;
