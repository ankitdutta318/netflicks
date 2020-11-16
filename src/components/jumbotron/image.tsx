import React from 'react';
import { Image } from './styles';

export interface IJumbotronImageProps {
  src: string;
  alt: string;
}

const JumbotronImage: React.FC<IJumbotronImageProps> = ({
  children,
  ...restProps
}) => {
  return <Image {...restProps}>{children}</Image>;
};

export default JumbotronImage;
