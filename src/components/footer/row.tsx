import React from 'react';
import { Row } from './styles';
import { IFooterColumnProps } from './column';

export interface IFooterRowProps {
  children: React.ReactNode;
}

export interface IFooterRowComposition {
  Column?: React.FC<IFooterColumnProps>;
}

const FooterRow: React.FC<IFooterRowProps> & IFooterRowComposition = ({
  children,
  ...restProps
}) => {
  return <Row {...restProps}>{children}</Row>;
};

export default FooterRow;
