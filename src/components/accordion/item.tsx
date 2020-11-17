import React, { useState } from 'react';
import { Item } from './styles';
import { AccordionContext } from './index';
import { IAccordionHeaderProps } from './header';
import { IAccordionBodyProps } from './body';

export interface IAccordionItemProps {
  children: {
    Header?: React.FC<IAccordionHeaderProps>;
    Body?: React.FC<IAccordionBodyProps>;
  };
}

interface IAccordionItemComposition {}

const AccordionItem: React.FC<IAccordionItemProps> &
  IAccordionItemComposition = ({ children, ...restProps }) => {
  const [toggleShow, setToggleShow] = useState(false);

  /**
   * Memoize the context to prevent unecessary renders.
   */
  const memoizedContextValue = React.useMemo(
    () => ({
      toggleShow,
      setToggleShow,
    }),
    [toggleShow, setToggleShow]
  );
  return (
    <AccordionContext.Provider value={memoizedContextValue}>
      <Item {...restProps}>{children}</Item>
    </AccordionContext.Provider>
  );
};

export default AccordionItem;
