import React from 'react'
import Header from '../components/Header'
import PageTitle from '../components/PageTitle'
import LongButton from '../components/LongButton';
import WhiteBlock from '../components/WhiteBlock'

import classes from '../styles/WantsPage.module.css'

import {motion} from 'framer-motion';

export default function WantsPage() {
  return (
    <motion.div
      initial={{opacity: 1}}
      transition={{ duration: 0.5 }}
      exit={{opacity: 0}}
    >
        <Header/>
        <PageTitle title={"Желания"}/>
        <div className={classes.title}><h3>Честно говоря все мои желания сейчас заканчиваются на том что я хочу пойти спать.</h3></div>
        <WhiteBlock/>
        <LongButton title='на главную' destination='/'/>
        <WhiteBlock/>
    </motion.div>
  )
}
