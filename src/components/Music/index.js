import React from 'react'
import Iframe from 'react-iframe'

import './style.css'

export default  function Music() {
    return(
        <div className='vidContainer'>
            <div className='vidContainerOne'><Iframe className='vidOne' src="https://www.youtube.com/embed/XCJIJKETpEw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen scrolling='auto'></Iframe></div>
            <div className='vidContainerTwo'><Iframe  className='vidTwoTwo' src="https://www.youtube.com/embed/b29wNydeSZo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Iframe></div>
        </div>
    )
}