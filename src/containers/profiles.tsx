import React from 'react';
import * as ROUTES from '../constants/routes';
import { Header, Profiles } from '../components';
import logo from '../logo.svg';
import { User } from '../types';

interface ISelectProfileContainerProps {
  user: User | null;
  setProfile: React.Dispatch<React.SetStateAction<User | null>>;
}

export function SelectProfileContainer({
  user,
  setProfile,
}: ISelectProfileContainerProps) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt='Netflicks' />
        </Header.Frame>
      </Header>

      {user && (
        <Profiles>
          <Profiles.Title>Who's watching?</Profiles.Title>
          <Profiles.List>
            <Profiles.User onClick={() => setProfile(user)}>
              <Profiles.Picture src={user.photoURL} />
              <Profiles.Name>{user.displayName}</Profiles.Name>
            </Profiles.User>
          </Profiles.List>
        </Profiles>
      )}
    </>
  );
}
