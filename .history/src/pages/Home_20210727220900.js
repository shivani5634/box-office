import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';

const Home = () => {
  const [input, setInput] = useState('');
  return (
    <MainPageLayout>
      <input type="text" />
    </MainPageLayout>
  );
};

export default Home;
