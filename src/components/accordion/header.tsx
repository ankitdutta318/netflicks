import React from 'react';
import { Header } from './styles';
import { useAccordion } from './index';

export interface IAccordionHeaderProps {
  children: React.ReactNode;
}

const AccordionHeader: React.FC<IAccordionHeaderProps> = ({
  children,
  ...restProps
}) => {
  const { toggleShow, setToggleShow } = useAccordion();

  return (
    <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
      {children}
      {toggleShow ? (
        <img src='/images/icons/close-slim.png' alt='Close' />
      ) : (
        <img src='/images/icons/add.png' alt='Open' />
      )}
    </Header>
  );
};

export default AccordionHeader;
