import React from 'react';
import { Link } from 'react-router-dom';

const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/starred', text: 'Starred' },
];

const Navs = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/starred">Go to home page</Link>{' '}
        </li>
      </ul>
    </div>
  );
};

export default Navs;
