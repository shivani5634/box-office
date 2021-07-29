import React, { useState, useEffect } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { useShows } from '../misc/custom-hook';
import { apiGet } from '../misc/config';

const Starred = () => {
  const [shows, setShows] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (starred && starred.length > 0) {
      const promises = starred.map(showId => apiGet(`/shows/${showId}`));
      Promise.all(promises).then(results => {
        console.log('results', results);
      });
    }
  }, [starred]);
  return <MainPageLayout>this is my starred page</MainPageLayout>;
};

export default Starred;
