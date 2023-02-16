import React from 'react'
import classes from "../styles/PageTitleMain.module.css" 

export default function PageTitleMain({title="Ксения Пестова"}) {
  return (
    <div className={classes.titleBox}> 
        <div className={classes.avatar}></div>
        <h1>Ксения <span>Пестова</span></h1>
    </div>
  )
}
