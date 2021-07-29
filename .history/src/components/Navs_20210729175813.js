import React from 'react';
import { Link } from 'react-router-dom';
import { NavList, LinkStyled } from './Navs.styled';

const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/starred', text: 'Starred' },
];

const Navs = () => {
  return (
    <div>
      <NavList>
        {LINKS.map(items => (
          <li key={items.to}>
            <LinkStyled to={items.to}>{items.text}</LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
};

export default Navs;
