import React from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import classes from '../styles/LongButton.module.css';

const StyledLink = styled(Link)`text-decoration: none;`;

export default function LongButton({ title = 'Направление', destination = '/' }) {
  return (
    <StyledLink to={destination}> <div className={classes.lbutton}>{title}</div> </StyledLink>
  );
}
