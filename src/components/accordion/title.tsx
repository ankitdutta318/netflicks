import React from 'react';
import { Title } from './styles';

export interface IAccordionTitleProps {
  children?: React.ReactNode;
}

const AccordionTitle: React.FC<IAccordionTitleProps> = ({
  children,
  ...restProps
}) => {
  return <Title {...restProps}>{children}</Title>;
};

export default AccordionTitle;
