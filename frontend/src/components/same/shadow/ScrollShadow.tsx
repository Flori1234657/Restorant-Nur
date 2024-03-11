import React from 'react';
import './cardMap.css';

interface Props {
  children: React.ReactNode;
  className: string;
  direction: 'Horizontal' | 'Vertical';
}

function ScrollShadow({ children, className, direction }: Props) {
  return (
    <>
      <div
        className={`scroll-shadow ${className} ${direction === 'Horizontal' ? '--left' : '--up'}`}
        aria-label="scroll container shadow"
      >
        ssss
      </div>
      {children}
      <div
        className={`scroll-shadow ${className} ${direction === 'Horizontal' ? '--right' : '--down'}`}
        aria-label="scroll container shadow"
      >
        ssss
      </div>
    </>
  );
}

export default ScrollShadow;
