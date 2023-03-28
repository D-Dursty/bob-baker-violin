import React from 'react'
import Iframe from 'react-iframe'

import './style.css'

export default function Calendar() {
    return(
        <div className='calendar'scrolling='auto'>
            <Iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&showTitle=0&showPrint=0&showTabs=0&showCalendars=1&src=Ym9iLmJha2VyLnZpb2xpbkBnbWFpbC5jb20&color=%23039BE5" style="border-width:0" width="800" height="600" frameborder="0" scrolling="auto"></Iframe>
        </div>
    )
}