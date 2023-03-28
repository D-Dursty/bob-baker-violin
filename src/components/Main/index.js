import React from 'react'
import Bob from '../../utilities/bobBake.jpg'
import { Link } from "react-router-dom";

import './style.css'

export default function Main() {
    return (
      <div>
        <div className="bioContainer">
          <img className="mainPic" src={Bob}></img>
          <div className="bioText">
            <p>
              I grew up as a classically trained violinist, but my musical heart
              sways to the rock, pop, blues and Americana sounds of our time.
            </p>
            <p>
              I received a bachelor’s degree in Violin from Whitman College and
              upon graduation returned to Portland, OR to perform and create
              music in the Pacific Northwest. My roots go back to the music of
              the 60’s 70’s and 80’s and my playing incorporates the precision
              of the classics with the soulfulness of the rhythm and blues
            </p>
            <p>
              I currently live in the mountains and pine forests of Sisters,
              Oregon, and perform here, in Bend, Redmond and the Willamette
              Valley with several musicians and groups. Two of my most frequent
              partners in music are Mark Barringer, and Brian Odell, learn more
              about them <Link to="/duets"> here.</Link>
            </p>
          </div>
        </div>
      </div>
    );
}