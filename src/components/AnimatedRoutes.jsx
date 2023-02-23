import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import HobbyPage from "../pages/HobbyPage";
import MainPage from "../pages/MainPage";
import AchivementsPage from "../pages/AchivementsPage";
import WantsPage from "../pages/WantsPage";

import {AnimatePresence} from 'framer-motion';

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage />} />
        <Route path="/achievments" element={<AchivementsPage />} />
        <Route path="/hobbies" element={<HobbyPage />} />
        <Route path="/wants" element={<WantsPage />} />
      </Routes>
    </AnimatePresence>
  )
}
