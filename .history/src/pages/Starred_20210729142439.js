import React from 'react';
import MainPageLayout from '../components/MainPageLayout';

const Starred = () => {
  const [shows, setShows] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  return <MainPageLayout>this is my starred page</MainPageLayout>;
};

export default Starred;
