import React from 'react'
import classes from '../styles/Header.module.css'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className={classes.headerBox}>
        <Link to="/achievments" style={{ textDecoration: 'none' }}> <h3>Достижения</h3> </Link>
        <Link to="/hobbies" style={{ textDecoration: 'none' }}> <h3>Хобби</h3> </Link>
        <Link to="/wants" style={{ textDecoration: 'none' }}> <h3>Желания</h3> </Link>
    </div>
  )
}
