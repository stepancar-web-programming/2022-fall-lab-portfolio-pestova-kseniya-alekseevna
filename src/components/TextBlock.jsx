import React from 'react'
import classes from '../styles/TextBlock.module.css'

export default function TextBlock({
    title="Заголовок:", 
    fisrtColumnFirstParagraph="Первая главная мысль.",
    fisrtColumnSecondParagraph="",
    secondColumnFirstParagraph="",
    secondColumnSecondParagraph="", }) {
  return (
      <div className={classes.textBlockLine}>
          <div className={classes.textTitle}><h3>{title}</h3></div>
          <div><p>{fisrtColumnFirstParagraph}</p>
              <p>{fisrtColumnSecondParagraph} </p></div>
          <div><p>{secondColumnFirstParagraph}</p>
              <p>{secondColumnSecondParagraph}</p></div>
      </div>
  )
}
