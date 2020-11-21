import React from 'react';
import { Container, Title, SubTitle } from './styles';

interface IFeatureTitleProps {
  children: React.ReactNode;
}

interface IFeatureSubTitleProps {
  children: React.ReactNode;
}

interface IFeatureProps {
  children: React.ReactNode;
}

interface IFeatureComposition {
  Title: React.FC<IFeatureTitleProps>;
  SubTitle: React.FC<IFeatureSubTitleProps>;
}

const Feature: React.FC<IFeatureProps> & IFeatureComposition = ({
  children,
  ...restProps
}) => {
  return <Container {...restProps}>{children}</Container>;
};

const FeatureTitle: React.FC<IFeatureTitleProps> = ({
  children,
  ...restProps
}) => {
  return <Title {...restProps}>{children}</Title>;
};
const FeatureSubTitle: React.FC<IFeatureSubTitleProps> = ({
  children,
  ...restProps
}) => {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Feature.Title = FeatureTitle;
Feature.SubTitle = FeatureSubTitle;

export default Feature;
