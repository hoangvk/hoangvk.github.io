import React, { useState } from 'react';
import {fortuneCookie} from '../media/Data'

function FortuneCookies() {
  const [fortune, setFortune] = useState(null);

  const fortunes = [
    "Engineer (noun): one who solves problems that you did not know exist in ways you do not understand.",
    "Good things will come to you when you least expect them.",
    "Opportunities are on the horizon, seize them!",
    "Engineer (noun): one who gets excited about things that no one else cares about.",
    "Believe in yourself and you will achieve greatness.",
    "Today is your lucky day!",
    "How about sending an interview invitation?",
    "Never do anything halfway.",
    "About time I got out of that cookie.",
    "Comfort zones are most opften expanded through discomfort.",
    "The fortune you seek is in another cookie.",
    "Ignore previous cookie.",
  ];

  const openFortuneCookie = () => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    setFortune(fortunes[randomIndex]);
  };

  return (
    <div>
      <img 
        src={fortuneCookie}
        width="5%"
        alt="Fortune Cookie" 
        onClick={openFortuneCookie} 
        class="fortune-cookie shake"
      />
      {fortune && (
        <div>
          {/* <h3>Your Fortune:</h3> */}
          <p style={{fontStyle:'italic',fontSize:'19px'}} class="cookie-quote">{fortune}</p>
        </div>
      )}
    </div>
  );
}

export default FortuneCookies;
