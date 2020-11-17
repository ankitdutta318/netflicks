import React from 'react';
import { Frame } from './styles';

export interface IAccordionFrameProps {
  children: {
    Item?: React.ReactNode;
  };
}

const AccordionFrame: React.FC<IAccordionFrameProps> = ({
  children,
  ...restProps
}) => {
  return <Frame {...restProps}>{children}</Frame>;
};

export default AccordionFrame;
