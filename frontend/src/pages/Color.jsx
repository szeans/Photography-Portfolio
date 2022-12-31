import './Color.css';
import {Index} from './index';
import React, { useEffect } from 'react';

export function Color() {
  useEffect(() => {
    document.title = 'szean: color';
  }, []);

  return (
    <div>
    <Index />
    <div id = "body">
    <h3>Color photos</h3>
    </div>
    </div>
  );
}