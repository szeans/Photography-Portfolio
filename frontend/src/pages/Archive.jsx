import './Archive.css';
import {Index} from './index';
import React, { useEffect } from 'react';

export function Archive() {
  useEffect(() => {
    document.title = 'szean: archive';
  }, []);
  
  return (
    <div>
    <Index />
    <div id = "body">
    <h3 id = "CS">COMING SOON!</h3>
    </div>
    </div>
  );
}