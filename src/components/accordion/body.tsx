import React from 'react';
import { Body } from './styles';
import { useAccordion } from './index';

export interface IAccordionBodyProps {
  children: React.ReactNode;
}

const AccordionBody: React.FC<IAccordionBodyProps> = ({
  children,
  ...restProps
}) => {
  const { toggleShow } = useAccordion();

  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};

export default AccordionBody;
