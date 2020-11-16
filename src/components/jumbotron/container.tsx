import React from 'react';
import { Container } from './styles';

export interface IJumbotronContainerProps {
  children: React.ReactNode;
}

const JumbotronContainer: React.FC<IJumbotronContainerProps> = ({
  children,
  ...restProps
}) => {
  return <Container {...restProps}>{children}</Container>;
};

export default JumbotronContainer;
