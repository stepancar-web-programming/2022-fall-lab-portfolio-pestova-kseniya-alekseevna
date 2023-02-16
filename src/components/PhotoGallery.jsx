import React, {useState} from 'react'
import classes from '../styles/PhotoGallery.module.css'

export default function PhotoGallery({slides}) {
    const[currentIndex, setCurrentIndex] = useState(()=>{return 0});

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }
    return (
        <div className={classes.gallery} style={{backgroundImage: `url(${slides[currentIndex].url})`}}> 
            <div className={classes.arrowleft} onClick={goToPrevious}>
                <img src='https://lh3.googleusercontent.com/pw/AMWts8D5nrPE7AaiINVymEbf7ZC-RLYHF8tbavR-9ifnUfgaTXOfHk7hZhQUxv6EiKNJrYKOsn0RFotqeR6r8dCay6mQZTCUVL7DDo8Im1dyrUm3_76aMPSSKu-vDEkpGS1pPK4ZpFUa9WXv-WiWi8l2RfZ0=w40-h66-no?authuser=0' alt="left arrow"/>
            </div>
            <div className={classes.arrowright} onClick={goToNext}>
                <img src='https://lh3.googleusercontent.com/pw/AMWts8AAQw-QYbF7JcfjyRMQqyZzxwnCNx5jj5Ag_s1wj6NNequEEtUYlCBdyyDR8o7vLAgbdM-po7aS8Of_zeALeH5rVSAtf0DeNdc2CWLXhX9XQZCeqkb9qPGEhGU98Z-jrikc0vpEGeoizThceF9ydY8P=w40-h66-no?authuser=0' alt="right arrow"/>
            </div>
        </div>
  )
}
