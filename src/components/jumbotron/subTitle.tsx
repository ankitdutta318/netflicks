import React from 'react';
import { SubTitle } from './styles';

export interface IJumbotronSubTitleProps {}

const JumbotronSubTitle: React.FC<IJumbotronSubTitleProps> = ({
  children,
  ...restProps
}) => {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

export default JumbotronSubTitle;
