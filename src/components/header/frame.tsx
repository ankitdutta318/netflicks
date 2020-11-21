import React from 'react';
import { Container } from './styles';

export interface IHeaderFrameProps {
  children: React.ReactNode;
}

const HeaderFrame: React.FC<IHeaderFrameProps> = ({
  children,
  ...restProps
}) => {
  return <Container {...restProps}>{children}</Container>;
};

export default HeaderFrame;
