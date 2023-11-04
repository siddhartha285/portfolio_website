import React from 'react'
import {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Footer() {
    const date = new Date().getFullYear();
  return (
    <div className='footer'>
        <p className='name'>
            @{date} Ryuguno
        </p>
    </div>
  )
}
