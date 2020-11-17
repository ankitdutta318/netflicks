import React from 'react';
import { Break } from './styles';

export interface IOptFormBreakProps {}

const OptFormBreak: React.FC<IOptFormBreakProps> = ({ ...restProps }) => {
  return <Break {...restProps} />;
};

export default OptFormBreak;
