import React from 'react'
import { Astroid } from 'lucide-react'

export default function Contact() {
  return (
    <>
    <div className="section-divider">
      <span className='marker'><Astroid size={16}/></span>
      <span className='num'>04</span>
      <div className='line-divider'></div>
      <span className='section-label'>Contact</span>
    </div>

    <section id='contact' className='portfolio-section'>
      <p>statement</p>
      <div>
        <p>more info</p>
      </div>
    </section>
    </>
  )
}
