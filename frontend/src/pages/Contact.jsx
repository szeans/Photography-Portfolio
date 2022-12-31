import './Contact.css';
import {Index} from './index';
import pp from "../../photos/profile_photo.jpg";
import React, { useEffect } from 'react';

export function Contact() {
  useEffect(() => {
    document.title = 'szean: contact';
  }, []);

  return (
    <div>
    <Index id = "index"/>
    <div id = "body">
    <img src = {pp} alt = "profile photo" />
      <p>Full time student pursuing a Bachelor of Science in Computer Science at Purdue University.</p>
      <p>Part time hobbyist undertaking photography, reading, skateboarding, fashion, music production, and weight training.</p>
      <p>e: ysc@purdue.edu</p>
    </div>
    </div>
  );
}