import React from 'react';
import Title from './Title';
import Navs from './Navs';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
        title="Box-office"
        subtitle="Are you looking for a movie or actor"
      />
      <Navs />
      {children}
    </div>
  );
};

export default MainPageLayout;
