import React from 'react'
import Iframe from 'react-iframe'

import './style.css'

export default function Calendar() {
    return(
        <div className='calendar'scrolling='auto'>
            <Iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&showTitle=0&src=Ym9iLmJha2VyLnZpb2xpbkBnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></Iframe>
        </div>
    )
}