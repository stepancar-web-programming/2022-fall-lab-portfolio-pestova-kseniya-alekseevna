import React from 'react';

import classes from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.textcontent}>
        <h1>Связаться со мной:</h1>
        <a href="https://vk.com/air_zeep">Vkontakte</a>
        <a href="https://t.me/air_zeep">Telegram</a>
      </div>
      <div className={classes.dots}>
        <div className={classes.dot} />
        <div className={classes.dot} />
        <div className={classes.dot} />
        <div className={classes.dot} />
        <div className={classes.dot} />
        <div className={classes.dot} />
        <div className={classes.dot} />
        <div className={classes.dot} />
        <div className={classes.dot} />
        <div className={classes.dot} />
        <div className={classes.dot} />
        <div className={classes.dot} />
        <div className={classes.dot} />
        <div className={classes.dot} />
        <div className={classes.dot} />
        <div className={classes.dot} />
      </div>
    </div>
  );
}
