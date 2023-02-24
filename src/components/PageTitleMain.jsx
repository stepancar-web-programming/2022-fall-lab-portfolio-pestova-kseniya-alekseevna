import React from 'react';

import classes from '../styles/PageTitleMain.module.css';

export default function PageTitleMain() {
  return (
    <div className={classes.titleBox}>
      <div className={classes.avatar} title="Avatar" />
      <h1>Ксения <span>Пестова</span></h1>
    </div>
  );
}
