import { useLayoutEffect } from 'react';

import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HomePage, RookiePage } from 'pages';

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);
  return children;
};

const Router = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Wrapper>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<RookiePage />} />
        </Routes>
      </Wrapper>
    </AnimatePresence>
  );
};

export default Router;
