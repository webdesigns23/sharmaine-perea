import React from 'react'
import Projects from './Projects'
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
      <p className='section-statement'>Learning, Building, and Evolving through code</p>
      <div className='section-info'>
        <p>
          After stepping away from dance, I found myself drawn to software engineering through the same process I'd always known — trial and error, taking something apart, fixing it, and building it back better. A teammate suggested I try a few online courses, and it immediately clicked. I went on to complete the Flatiron School Software Engineering program, building a foundation in JavaScript, React, Python, Flask, SQL, and PostgreSQL. The more I learned, the more it felt familiar — you're still building something from scratch, still solving problems, still refining until it works the way you want it to.
        </p>
      </div>
      
      <div className='section-projects'>
        <Projects />
      </div>
    </section>
    </>
  )
}
