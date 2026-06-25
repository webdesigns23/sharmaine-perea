import React from 'react'
import { Astroid } from 'lucide-react'
import dance from '../assets/images/dancer.png'
import "../styles/sections.css"

export default function About() {
  return (
    <>
    <div id='about' className="section-divider cream">
      <span className='marker'><Astroid size={16}/></span>
      <span className='num'>01</span>
      <div className='line-divider'></div>
      <span className='section-label'>About Me</span>
    </div>

    <section  className='portfolio-section cream'>
      <div className='section-statement'>
        <img src={dance} alt='dancer'/>
        <p>
          My foundation in ballet sharpened my precision, iterative thinking, and attention to detail.
        </p>
      </div>
      
      <div>
        <p className='section-info cream'>
          I earned a BFA in Dance from UMKC and spent ten years as a professional ballet dancer with San Diego Ballet. When I retired in 2020, I turned my passion for dance into Charms Dancewear, designing and sewing dancewear for studios and companies nationwide. Stepping away from performing gave me space to explore what else I was capable of, which led me to Flatiron School, where I built a foundation in full-stack development. I've always been drawn to disciplines that reward precision and iteration, the stage taught me discipline, the business taught me systems thinking, and code gave me a new way to create.
        </p>      
      </div>
    </section>
    </>
  )
}
