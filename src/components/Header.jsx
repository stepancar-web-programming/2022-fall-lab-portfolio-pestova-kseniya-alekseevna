import React from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import classes from '../styles/Header.module.css';

const StyledLink = styled(Link)`text-decoration: none;`;

export default function Header() {
  return (
    <div className={classes.headerBox}>
      <StyledLink to="/achievments"> <h3>Достижения</h3> </StyledLink>
      <StyledLink to="/hobbies"> <h3>Хобби</h3> </StyledLink>
      <StyledLink to="/wants"> <h3>Желания</h3> </StyledLink>
    </div>
  );
}
