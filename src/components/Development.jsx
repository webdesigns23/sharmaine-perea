import React from 'react'
import { Diamond } from 'lucide-react'
import "../styles/sections.css"

export default function Development() {
  return (
    <>
    <div className="section-divider">
      <span className='marker'><Diamond size={16}/></span>
      <span className='num'>03</span>
      <div className='line-divider'></div>
      <span className='section-label'>Development</span>
    </div>

    <section id='development' className='portfolio-section'>
      <p>statement</p>
      <div>
        <p>more info</p>
      </div>
    </section>
    </>
  )
}
