import React from "react";
import Iframe from "react-iframe";

import "./style.css";


 export default function Music() {
  return (
    <div className="vidContainer">
      <div className="vidContainerOne">
        <Iframe
          className="vidOne"
          src="https://www.youtube.com/embed/566nN9FefM4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          scrolling="auto"
        ></Iframe>
      </div>
      <div className="vidContainerTwo">
        <Iframe
          className="vidTwoTwo"
          src="https://www.youtube.com/embed/LRJe_QT1voA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          scrolling="auto"
        ></Iframe>
      </div>
      <div className='vidContainerThree'>
      <iframe
        className='vidThree'
        src="https://www.youtube.com/embed/XCJIJKETpEw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        ></iframe>
    </div>
    <div className='vidContainerFour'>
      <iframe
        className='vidFour'
        src="https://www.youtube.com/embed/b29wNydeSZo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen     
        ></iframe>
    </div>
    </div>
  );
} 

//<iframe width="560" height="315" src="https://www.youtube.com/embed/566nN9FefM4?si=mW7jjgJQnip4xkwk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

//<iframe width="560" height="315" src="https://www.youtube.com/embed/LRJe_QT1voA?si=abEHYJAfF8E3BAJ_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
