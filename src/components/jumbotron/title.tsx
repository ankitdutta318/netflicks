import React from 'react';
import { Title } from './styles';

export interface IJumbotronTitleProps {}

const JumbotronTitle: React.FC<IJumbotronTitleProps> = ({
  children,
  ...restProps
}) => {
  return <Title {...restProps}>{children}</Title>;
};

export default JumbotronTitle;
