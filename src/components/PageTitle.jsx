import React from 'react';

import classes from '../styles/PageTitle.module.css';

export default function PageTitle({ title = 'Заголовок' }) {
  return (
    <div className={classes.titleBox}>
      <h1> {title} </h1>
    </div>
  );
}
