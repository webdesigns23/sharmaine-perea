import React from 'react'
import { Diamond } from 'lucide-react'
import "../styles/sections.css"

export default function About() {
  return (
    <>
    <div className="section-divider">
      <span className='marker'><Diamond size={16}/></span>
      <span className='num'>01</span>
      <div className='line-divider'></div>
      <span className='section-label'>About Me</span>
    </div>

    <section id='about' className='portfolio-section'>
      <p>statement</p>
      <div>
        <p>more info</p>
      </div>
    </section>
    </>
  )
}
