import React from 'react'
import "./Section.css"

export default function Section({name='Название'}) {
  return (
    <div className='box'>
        <h2>{name}</h2>
    </div>
  )
}
