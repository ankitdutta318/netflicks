import React, { useState, useEffect } from 'react';
import { useAuthListener } from '../hooks';
import { User } from '../types';
import { FilterOutputProps } from '../utils/selection-filter';
import { SelectProfileContainer } from './profiles';

interface IBrowserContainerProps {
  slides: FilterOutputProps;
}

export function BrowserContainer({ slides }: IBrowserContainerProps) {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<User | null>(null);
  const { user } = useAuthListener();

  useEffect(() => {
    console.log('Profile: ', profile);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile]);

  return <SelectProfileContainer user={user} setProfile={setProfile} />;
}
