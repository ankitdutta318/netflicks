import React from 'react';
import { FilterOutputProps } from '../utils/selection-filter';

interface IBrowserContainerProps {
  slides: FilterOutputProps;
}

export function BrowserContainer({ slides }: IBrowserContainerProps) {
  return <p>Hello</p>;
}
