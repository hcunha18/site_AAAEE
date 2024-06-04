// PageTransition.jsx
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="page"
        timeout={300}
      >
        <div className="page">
          {children}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default PageTransition;
