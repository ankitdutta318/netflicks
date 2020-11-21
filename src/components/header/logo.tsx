import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './styles';

export interface IHeaderLogoProps {
  to: string;
  src: string;
  alt?: string;
}

const HeaderLogo: React.FC<IHeaderLogoProps> = ({ to, ...restProps }) => {
  return (
    <Link to={to}>
      <Logo {...restProps} />
    </Link>
  );
};

export default HeaderLogo;
