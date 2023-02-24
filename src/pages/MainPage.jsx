import React from 'react';

import { motion } from 'framer-motion';

import classes from '../styles/MainPage.module.css';
import Header from '../components/Header';
import PageTitleMain from '../components/PageTitleMain';
import TextBlock from '../components/TextBlock';

import Footer from '../components/Footer';

export default function MainPage() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >

      <div className={classes.pageContent}>
        <Header />
        <PageTitleMain />
        <TextBlock
          title="Обо мне:"
          fisrtColumnFirstParagraph="Привет! Меня зовут Ксюша Пестова, мне 20."
          fisrtColumnSecondParagraph="Изучаю японский, хорошо знаю английский язык. Мне нравится писать и придумывать сценарии. Вместе с подружкой мы создаем простые текстовые игры."
          secondColumnFirstParagraph="В свободное время я играю в компьютерные или настольные игры."
          secondColumnSecondParagraph="Мне нравится создавать вещи собственными руками или придумывать небольшие проекты, которые я никогда не заканчиваю."
        />
      </div>

      <footer><Footer /></footer>

    </motion.div>

  );
}
