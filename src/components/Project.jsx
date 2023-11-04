import React from 'react'
import {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Projcard from './Projcard'
import sorting from '../assets/sorting.png'
import musicplayer from "../assets/musicplayer.png"
import xcrypto from "../assets/xcrypto.png"
import netflix from "../assets/netflix.png"
import dailygoals from "../assets/dailygoals.png"
import weather from "../assets/weather.png"

import portfolio_website_img from "../assets/portfolio_website_img.png"
export default function Project() {
  useEffect(()=>{
    AOS.init({duration: 2000});
  },[]);
  return (
    <div className='project'>
      <h1 className='heading'>Projects</h1>
      <hr  className='hrule'/>
      <div className='projcards'>
      
      
      <Projcard
      description="XCrypto"
      img= {xcrypto}
      duration="A user-friendly web application using Chakra UI and React, providing real-time insights and data on various cryptocurrencies; enhanced user experience, driving increased engagement and informed investment decisions."
      gitlink="https://github.com/siddhartha285/XCrypto"
      live="https://x-crypto-steel.vercel.app/"
      />
      <Projcard
      description="Sorting Visualizer"
      img= {sorting}
      duration="An interactive web application utilizing JavaScript to visually illustrate the step-by-step execution of various sorting algorithms"
      gitlink="https://github.com/siddhartha285/Sorting-Visualizer"
      live="https://64ccaa092be4dd60dbdf58be--sparkling-souffle-62f884.netlify.app/"
      />
      <Projcard
      description="Music Player"
      img= {musicplayer}
      duration="A sleek and user-friendly music player website, thoughtfully designed using HTML, CSS and javascript. "
      gitlink="https://github.com/siddhartha285/Music-Player"
      live="https://648ec9aa38df29146815216f--coruscating-biscochitos-b9db45.netlify.app/"
      />
      <Projcard
      description="Personal Portfolio"
      img= {portfolio_website_img}
      duration="Personal portfolio web app, meticulously crafted using React and other powerful libraries, designed to help exhibit talent, skills, and accomplishments."
      gitlink=""
      live=""
      />
        <Projcard
      description="Netflix-Clone"
      img= {netflix}
      duration="A web app built using React Js and Axios that demonstrates the frontend of the famous Netflix website."
      gitlink="https://github.com/siddhartha285/Netflix-Clone"
      live="https://netflix-clone-jet-psi.vercel.app/"
      />
        <Projcard
      description="Daily Goals"
      img= {dailygoals}
      duration="A website built using HTML, CSS and Javascript that lets you store your daily goals and edit them with help of local storage."
      gitlink="https://github.com/siddhartha285/Daily_Goals_Javascript"
      live="https://64ba73e6e9e426007364c6b5--vocal-mochi-f7e7c8.netlify.app/"
      />
        <Projcard
      description="Weather App"
      img= {weather}
      duration="Wether app provides you the exact weather data of a location using weather api. It is built using HTML, CSS and Javascript."
      gitlink="https://github.com/siddhartha285/weather-javascript"
      live="https://64bd07bba116000e20680805--resonant-arithmetic-6494f5.netlify.app/"
      />
      
      
      
      </div>
    </div>
  )
}
