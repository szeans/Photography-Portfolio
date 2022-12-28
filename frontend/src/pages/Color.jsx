import './Color.css';
import React, { useEffect } from 'react';

export function Color() {
  useEffect(() => {
    document.title = 'szean: color';
  }, []);

  return (
    <div>
      <h3>Color photos</h3>
    </div>
  );
}