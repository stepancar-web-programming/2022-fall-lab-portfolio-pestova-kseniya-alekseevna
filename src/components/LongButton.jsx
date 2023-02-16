import React from 'react'
import classes from '../styles/LongButton.module.css'
import { Link } from 'react-router-dom';

export default function LongButton({title="Направление", destination='/'}) {
  return (
    <Link to={destination} style={{ textDecoration: 'none' }}> <div className={classes.lbutton}>{title}</div> </Link>
  )
}
