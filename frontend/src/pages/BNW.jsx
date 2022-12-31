import './BNW.css';
import {Index} from './index';
import React, { useEffect } from 'react';

export function BNW() {
  useEffect(() => {
    document.title = 'szean';
  }, []);

  return (
    <div>
    <Index />
    <div id = "body">
    <h3>bnw photos!</h3>
    </div>
    </div>
  );
}