import './Contact.css';
import React, { useEffect } from 'react';

export function Contact() {
  useEffect(() => {
    document.title = 'szean: contact';
  }, []);

  return (
    <div id = "body">

      <p>Full time student pursuing a Bachelor of Science in Computer Science at Purdue University.</p>
      <p>Part time hobbyist undertaking photography, reading, skateboarding, fashion, music production, and weight training.</p>
      <p>e: ysc@purdue.edu</p>
    </div>
  );
}