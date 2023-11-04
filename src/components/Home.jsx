import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Typed from 'typed.js';
import resume from '../assets/Resume.pdf'
// import {Linkedin} from "react-icons";
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"
import {SiLeetcode} from "react-icons/si"
import Design from './Design';

export default function Home() {
  useEffect(()=>{
    AOS.init({duration: 1000});
  },[]);
    const name="SIDDHARTH DWIVEDI";
    const el = React.useRef(null);
    React.useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ['Coder.', 'Web Developer.','Tech Enthusiast.'],
          typeSpeed: 30,
          backSpeed: 30,
          loop:true,
          
        });
        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
          };
        }, []);
    
  return (
    <div className='home'>
 
    <h1 className='siddharth' data-aos='zoom-in'>{name}</h1>
    <div className="container">
        <span>I'm a <span className='orange' ref={el} /> </span>
      
    </div>
    <hr className='rule'></hr>
    <div className="socials">
    <a href="https://www.linkedin.com/in/siddharth-dwivedi-088146229/" target='_blank'><AiFillLinkedin className='icon neon' size='2.5rem' color='white' /></a>
    <a href="https://github.com/siddhartha285" target='_blank'><AiFillGithub className='icon' size='2.5rem' color='white'/></a>
    <a href="https://www.instagram.com/ryugun_28/?hl=en" target='_blank'><AiFillInstagram className='icon' size='2.5rem' color='white' /></a>
    <a href="https://leetcode.com/Ryuguno/" target='_blank'><SiLeetcode className='icon' size='2.4rem' color='white' /></a>
    </div>
    
    <a href={resume} download="Resume">
    <button className='resume'>Resume</button></a>
  

    </div>
  )
}
