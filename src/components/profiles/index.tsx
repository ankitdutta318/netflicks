import React from 'react';
import { Container, Title, List, Item, Picture, Name } from './styles';

interface IProfilesProps {
  children: React.ReactNode;
}

interface IProfilesTitleProps {
  children: React.ReactNode;
}

interface IProfilesListProps {
  children: React.ReactNode;
}

interface IProfilesUserProps {
  onClick?: () => void;
  children: React.ReactNode;
}

interface IProfilesPictureProps {
  src: string | null;
}

interface IProfilesNameProps {
  children: React.ReactNode;
}

export default function Profiles({ children, ...restProps }: IProfilesProps) {
  return <Container {...restProps}>{children}</Container>;
}

Profiles.Title = function ProfilesTitle({
  children,
  ...restProps
}: IProfilesTitleProps) {
  return <Title {...restProps}>{children}</Title>;
};

Profiles.List = function ProfilesList({
  children,
  ...restProps
}: IProfilesListProps) {
  return <List {...restProps}>{children}</List>;
};

Profiles.User = function ProfilesUser({
  children,
  ...restProps
}: IProfilesUserProps) {
  return <Item {...restProps}>{children}</Item>;
};

Profiles.Picture = function ProfilesPicture({
  src,
  ...restProps
}: IProfilesPictureProps) {
  return (
    <Picture
      {...restProps}
      src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'}
    />
  );
};

Profiles.Name = function ProfilesName({
  children,
  ...restProps
}: IProfilesNameProps) {
  return <Name {...restProps}>{children}</Name>;
};
