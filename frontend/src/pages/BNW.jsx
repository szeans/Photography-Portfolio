import './BNW.css';
import React, { useEffect } from 'react';

export function BNW() {
  useEffect(() => {
    document.title = 'szean';
  }, []);

  return (
    <div>
      <h3>bnw photos!</h3>
    </div>
  );
}