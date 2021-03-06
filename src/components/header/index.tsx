import React from 'react';
import Frame, { IHeaderFrameProps } from './frame';
import Logo, { IHeaderLogoProps } from './logo';
import ButtonLink, { IHeaderButtonLink } from './button-link';
import { Background } from './styles';

interface IHeaderProps {
  bg?: boolean;
  children: any;
}

interface IHeaderComposition {
  Frame: React.FC<IHeaderFrameProps>;
  Logo: React.FC<IHeaderLogoProps>;
  ButtonLink: React.FC<IHeaderButtonLink>;
}

const Header: React.FC<IHeaderProps> & IHeaderComposition = ({
  bg = true,
  children,
  ...restProps
}) => {
  return bg ? <Background {...restProps}>{children}</Background> : children;
};

Header.Frame = Frame;
Header.ButtonLink = ButtonLink;
Header.Logo = Logo;

export default Header;
