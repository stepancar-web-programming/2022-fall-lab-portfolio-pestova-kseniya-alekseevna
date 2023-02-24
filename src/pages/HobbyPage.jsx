import React from 'react';

import { motion } from 'framer-motion';

import Header from '../components/Header';
import PageTitle from '../components/PageTitle';

import TextBlock from '../components/TextBlock';
import LongButton from '../components/LongButton';
import WhiteBlock from '../components/WhiteBlock';
import VideoPlayer from '../components/VideoPlayer';

import classes from '../styles/HobbyPage.module.css';

export default function HobbyPage() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <PageTitle title="Хобби" />
      <TextBlock
        title="Языки:"
        fisrtColumnFirstParagraph="Изучаю японский, хорошо знаю английский язык. Иногда пытаюсь заниматься переводом небольших историй с английского на русский."
      />
      <TextBlock
        title="Видеоигры:"
        fisrtColumnFirstParagraph="В свободное время мне нравится играть в видео игры, но я также писала код и текст для нескольких инди проектов.  Девочка на аватарке - главная героиня одной из наших игр."
      />
      <TextBlock
        title="Рукоделие:"
        fisrtColumnFirstParagraph="Люблю вязать, вышивать крестиком и заниматься разного рода рукоделием. Сейчас вяжу большой мягкий кардиган."
      />
      <div className={classes.title}>
        <h3>Ни одно видео, связанное с выше перечисленными увлечениями,
          у меня либо ни нашлось, либо мне не нравится.
          Поэтому я здесь будет видео с нашей поездки с друзьями,
          где мы зажигаем бенгальские огни в лесу после того,
          как закончили снимать трейлер для несуществующего фильма.
        </h3>
      </div>
      <VideoPlayer />
      <LongButton title="на главную" destination="/" />
      <WhiteBlock />
    </motion.div>
  );
}
