import React from 'react';
import Container, { IJumbotronContainerProps } from './container';
import Pane, { IJumbotronPaneProps } from './pane';
import Title, { IJumbotronTitleProps } from './title';
import SubTitle, { IJumbotronSubTitleProps } from './subTitle';
import Image, { IJumbotronImageProps } from './image';
import { Item, Inner } from './styles';

export interface IJumbotronComposition {
  Container: React.FC<IJumbotronContainerProps>;
  Pane: React.FC<IJumbotronPaneProps>;
  Title: React.FC<IJumbotronTitleProps>;
  SubTitle: React.FC<IJumbotronSubTitleProps>;
  Image: React.FC<IJumbotronImageProps>;
}

export interface IJumbotronProps {
  direction: string;
  children: React.ReactNode;
}

const Jumbotron: React.FC<IJumbotronProps> & IJumbotronComposition = (
  props
) => {
  return (
    <Item {...props}>
      <Inner direction={props.direction}>{props.children}</Inner>
    </Item>
  );
};

Jumbotron.Container = Container;
Jumbotron.Pane = Pane;
Jumbotron.Title = Title;
Jumbotron.SubTitle = SubTitle;
Jumbotron.Image = Image;

export default Jumbotron;
