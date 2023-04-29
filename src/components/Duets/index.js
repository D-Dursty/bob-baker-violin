import React from "react";
import Mark from "../../utilities/Mark.jpg";
import Brian from "../../utilities/Brian.jpg";

import "./style.css";

export default function Duets() {
  return (
    <div className="duetsContainer">
      <div className="duetBio">
        <div className="markBio">
          <img className="markImage" src={Mark}></img>
          <p>
            <strong>Mark Barringer (Vocals/Guitar):</strong>
            <p>
              Originally from the San Francisco Bay Area, Mark’s played with
              many talented musicians. From rock to rhythm and blues, folk to
              bluegrass his musical landscape is very eclectic. Strong vocals
              and guitar are his trademark with a love for his own personal
              arrangements. Mark currently resides in Bend Oregon. Barringer and
              Baker formed seven years after Bob had wandered into a wine bar
              where Mark was playing in Bend. They met, they jammed, and it
              wasn’t until seven years later when Bob had a home in Sisters that
              they reconnected and the synergy and energy from the original
              meeting created the bond and music of Barringer and Baker. You’ll
              hear the music of Neil Young, Bob Dylan, Tom Petty, The
              Decemberists, John Mellencamp, and Van Morrison to name a few.
            </p>
          </p>
        </div>
        <div className="brianBio">
          <p>
          <img className="brianImgTop" src={Brian}></img>
            <strong>Brian Odell (Vocals/Guitar):</strong>
            <p className="bText">
              Brian and Bob first met when he was asked to sit in at a band
              rehearsal for the Brian Odell Band. Music styles clicked and Bob
              joined his band which still plays in the Pacific Northwest. Brian
              is a Portland-based singer-songwriter whose heartfelt lyrics and
              vocals have attracted a following for over a decade. His first
              introduction to music was singing in school choirs and later in
              college writing and singing his own music. At sixteen years of age
              he taught himself guitar by dissecting Dave Matthews songs. In
              2007 he released an album titled 'Rise Above It All', and his
              second album was released in 2016 with The Brian Odell
              Band--recorded live at The Secret Society in Portland which can be
              heard currently on YouTube. Brian & Bob’s music as a duo is firmly
              grounded in the rock music they grew up with, incorporating funk,
              blues, and a bit of fusion flavor. They combine acoustic guitar,
              vocals & electric violin in original music & select covers. It’s a
              sound that’s truly unique! Their influences include Dave Matthews
              Band, John Mayer, Jack Johnson, and David LaFlamme of It’s a
              Beautiful Day.
            </p>
          </p>
          <img className="brianImg" src={Brian}></img>
        </div>
      </div>
    </div>
  );
}
