import React from 'react';
import { Pane } from './styles';
import { IJumbotronImageProps } from './Image';
import { IJumbotronTitleProps } from './Title';
import { IJumbotronSubTitleProps } from './SubTitle';

export interface IJumbotronPaneProps {
  children: React.ReactNode;
}

export interface IJumbotronPaneComposition {
  Title?: React.FC<IJumbotronTitleProps>;
  SubTitle?: React.FC<IJumbotronSubTitleProps>;
  Image?: React.FC<IJumbotronImageProps>;
}

const JumbotronPane: React.FC<IJumbotronPaneProps> &
  IJumbotronPaneComposition = (props) => {
  return <Pane {...props}>{props.children}</Pane>;
};

export default JumbotronPane;
