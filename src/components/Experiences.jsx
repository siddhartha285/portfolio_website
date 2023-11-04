import {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import React from 'react'
import ques from "../assets/ques.png";
import Github from "../components/Github";
export default function Experiences() {
  useEffect(()=>{
    AOS.init({duration: 1000});
  },[]);
  return (
    <div className='experiences'>
    
      <h1  className='heading'>Experience</h1>
      <hr  />
      <div data-aos='fade-right' className='journey'>
      <div className='educard'>
        <h1 className=''>Ajeesh Solutions</h1>
        <p>Company aims to provide a platform to host and organize hackathons and events.</p>
        <hr />
        <p>Web Developer Intern</p>
        <p>Oct/2021 - Present</p>
    </div> 
    </div>
    <h1 className='heading'>Github Profile</h1>
      <hr />
      <div data-aos='fade-right' className='github'>
      <Github/>
      </div>
      <h1 className='heading'>Leetcode Profile</h1>
      <hr />
      <img data-aos='fade-right' className='ques' src={ques} alt='leetcode'/>
     
    </div>
  )
}
