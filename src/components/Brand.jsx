import React from 'react'
import { Diamond, MoveUpRight } from 'lucide-react'
import "../styles/sections.css"

export default function Brand() {
  return (
	<>
    <div className="section-divider">
      <span className='marker'><Diamond size={16}/></span>
      <span className='num'>02</span>
      <div className='line-divider'></div>
      <span className='section-label'>Brand</span>
    </div>

    <section id='brand' className='portfolio-section'>
      <div className='section-statement'>
        <p >Charms Dancewear</p>
        <span>custom handmade dancewear</span>
        
      </div>
      <div className='section-info'>
        <p>
          Founder of Charms Dancewear, custom classwear and performance costumes for dance companies, studios, and competitions nationwide. What started in 2012 as making my own leotards at San Diego Ballet grew into a full costume design business through trial and error, iteration, and a lot of seam ripping. I design, create patterns, grade sizes, sew, and ship every piece myself. Running every aspect solo taught me that what I love most isn't just the finished product, it's the problem-solving and process behind it.
        </p>
        <a 
          href="https://etsy.com/shop/charmsdancewear"           
          target="_blank"
          className="section-link">
            visit charms dancewear 
            <MoveUpRight/>
          </a>
      </div>
    </section>
    </>
  )
}
