import React from 'react'
import Header from '../components/Header'
import PageTitle from '../components/PageTitle'
import LongButton from '../components/LongButton';
import WhiteBlock from '../components/WhiteBlock'

import {motion} from 'framer-motion';
import TextBlock from '../components/TextBlock';
import PhotoGallery from '../components/PhotoGallery';

import classes from '../styles/AchivementsPage.module.css'

export default function AchivementsPage() {
  const slides_weekend = [
    {url: 'https://anivisual.net/_sf/29/57919945.jpg', title: 'Writing'},
    {url: 'https://anivisual.net/_sf/29/72487042.jpg', title: 'Writing'},
    {url: 'https://anivisual.net/_sf/29/81188612.jpg', title: 'Knitting'},
    {url: 'https://anivisual.net/_sf/29/99958541.jpg', title: 'Knitting'},
    {url: 'https://anivisual.net/_sf/29/64565517.jpg', title: 'Knitting'}
  ]
  const slides_gigngerbread = [
    {url: 'https://anivisual.net/_sf/32/10494229.jpg', title: 'Writing'},
    {url: 'https://anivisual.net/_sf/32/15926498.jpg', title: 'Writing'},
    {url: 'https://anivisual.net/_sf/32/82003604.jpg', title: 'Knitting'},
  ]
  return (
    <motion.div
      initial={{opacity: 1}}
      transition={{ duration: 0.5 }}
      exit={{opacity: 0}}>
        <Header/>
        <PageTitle title={"Достижения"}/>
        <div className={classes.title}>
          <h3>Визуальные новеллы</h3>
        </div>
        <div className={classes.paragraph}>
          <p>Игры, которые мы делаем с подругой, называются "визуальные новеллы". Можно сказать это скорее не игры а книжки с картинками, в которых ты иногда можешь делать выборы которые влияют на историю.
            Всего мы сделали две игры, обе из которых можно найти на сайте <a href="https://anivisual.net/">Anivisual.net</a>.
          </p>
        </div>
        <WhiteBlock/>
        <TextBlock 
        title="Weekend"
        fisrtColumnFirstParagraph ="Weekend - наш первый проект сделанный в рамках VN Completion Contest #1."
        fisrtColumnSecondParagraph = "Сюжет напоминает небольшой психоделический хоррор."
        secondColumnFirstParagraph ="Главный герой приехал на море со своими друзьями."
        secondColumnSecondParagraph = "Однако с каждым днем происходят все более странные вещи."/>
        <PhotoGallery slides={slides_weekend}/>
        <TextBlock 
        title="GingerBread"
        fisrtColumnFirstParagraph ="GingerBread - был второй новеллой, которую мы сделали уже для Anivisual Jam #2."
        fisrtColumnSecondParagraph = "Темы истории в этот раз более приветливые и простые."
        secondColumnFirstParagraph ="Это небольшая новогодняя история о девочке и ее дяде, которые в результате некоторых обстоятельств вынуждены проводить праздник вместе."/>
        <PhotoGallery slides={slides_gigngerbread}/>
        <LongButton title='на главную' destination='/'/>
        <WhiteBlock/>
    </motion.div>
  )
}
