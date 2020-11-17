import React, { useContext, createContext } from 'react';
import Title, { IAccordionTitleProps } from './title';
import Frame, { IAccordionFrameProps } from './frame';
import Item, { IAccordionItemProps } from './item';
import Header, { IAccordionHeaderProps } from './header';
import Body, { IAccordionBodyProps } from './body';
import { Container, Inner } from './styles';

interface IAccordionContext {
  toggleShow: boolean;
  setToggleShow: (value: boolean) => void;
}

interface IAccordionProps {
  children: React.ReactNode;
}

interface IAccordionComposition {
  Title: React.FC<IAccordionTitleProps>;
  Frame: React.FC<IAccordionFrameProps>;
  Item: React.FC<IAccordionItemProps>;
  Header: React.FC<IAccordionHeaderProps>;
  Body: React.FC<IAccordionBodyProps>;
}

export const AccordionContext = createContext<IAccordionContext | undefined>(
  undefined
);

const Accordion: React.FC<IAccordionProps> & IAccordionComposition = ({
  children,
  ...restProps
}) => {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
};

/**
 * This Context hook allows our child components to easily reach
 * into the Accordion context and get the pieces it needs.
 *
 * Bonus: it even makes sure the component is used within a
 * Accordion component!
 */
export const useAccordion = (): IAccordionContext => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('This component must be used within a <Tabs> component.');
  }
  return context;
};

Accordion.Title = Title;
Accordion.Frame = Frame;
Accordion.Item = Item;
Accordion.Header = Header;
Accordion.Body = Body;

export default Accordion;
