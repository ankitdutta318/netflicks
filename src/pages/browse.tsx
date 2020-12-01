import React from 'react';
import { useContent } from '../hooks';

const Browse = () => {
  const { series } = useContent('series');
  const { films } = useContent('films');
  console.log(series, films);
  return (
    <>
      <p>Browse</p>
    </>
  );
};

export default Browse;
