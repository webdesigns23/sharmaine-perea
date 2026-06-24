import React from 'react'
import { Astroid } from 'lucide-react'
import { contact } from '../data/contacts'

export default function Contact() {
  return (
    <>
    <div className="section-divider">
      <span className='marker'><Astroid size={16}/></span>
      <span className='num'>04</span>
      <div className='line-divider'></div>
      <span className='section-label'>Contact</span>
    </div>

    <section id='contact' className='portfolio-section'
      style={{ display: 'block', textAlign: 'center', padding: '56px 28px' }}>
      <p className='section-statement'>
        Open to software engineering roles.<br/>
        <span>Let's connect.</span>
      </p>
      
      <p style={{fontSize: '18px'}}>
        Based in Denver, CO<br/>
        I'm  always up for a collaboration or a coffee chat.
      </p>

      <div className='contact-links'>
        {contact.map(({label, href }) => (
          <a 
            key={label} 
            href={href} 
            target='_blank'
            className='section-link'
          >
            {label}
          </a>
        ))}
      </div>
    </section>
    </>
  )
}
