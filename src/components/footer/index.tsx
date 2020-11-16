import React from 'react';
import Row, { IFooterRowProps } from './row';
import Column, { IFooterColumnProps } from './column';
import Link, { IFooterLinkProps } from './link';
import Title, { IFooterTitleProps } from './title';
import Text, { IFooterTextProps } from './text';
import Break, { IFooterBreakProps } from './break';
import { Container } from './styles';

export interface IFooterProps {
  children: React.ReactNode;
}

export interface IFooterComposition {
  Row?: React.FC<IFooterRowProps>;
  Column?: React.FC<IFooterColumnProps>;
  Link?: React.FC<IFooterLinkProps>;
  Title?: React.FC<IFooterTitleProps>;
  Text?: React.FC<IFooterTextProps>;
  Break?: React.FC<IFooterBreakProps>;
}

const Footer: React.FC<IFooterProps> & IFooterComposition = (props) => {
  return <Container {...props}>{props.children}</Container>;
};

Footer.Row = Row;
Footer.Column = Column;
Footer.Link = Link;
Footer.Title = Title;
Footer.Text = Text;
Footer.Break = Break;

export default Footer;
