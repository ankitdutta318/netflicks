import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { User } from '../types';

interface IUserRedirectProps {
  user: User | null;
  loggedInPath: string;
  path: string;
  children: React.ReactNode;
}

interface ProtectedRouteProps {
  user: User | null;
  path: string;
  children: React.ReactNode;
}

export function IsUserRedirect({
  user,
  loggedInPath,
  children,
  ...rest
}: IUserRedirectProps) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children;
        }

        if (user) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}

export function ProtectedRoute({
  user,
  children,
  ...rest
}: ProtectedRouteProps) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: 'signin',
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}
