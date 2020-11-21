import React from 'react';
import { ButtonLink } from './styles';

export interface IHeaderButtonLink {
  children: React.ReactNode;
  to: string;
}

const HeaderButtonLink: React.FC<IHeaderButtonLink> = ({
  to,
  children,
  ...restProps
}) => {
  return (
    <ButtonLink to={to} {...restProps}>
      {children}
    </ButtonLink>
  );
};

export default HeaderButtonLink;
