import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

const Show = () => {
  const { id } = useParams();
  useEffect(() => {
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`);
  }, []);
  console.log('params', params);
  return <div>this is show page</div>;
};

export default Show;
