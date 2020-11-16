import React from 'react';
import { Title } from './styles';

export interface IFooterTitleProps {
  children: React.ReactNode;
}

const FooterTitle: React.FC<IFooterTitleProps> = ({
  children,
  ...restProps
}) => {
  return <Title {...restProps}>{children}</Title>;
};

export default FooterTitle;
