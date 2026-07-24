import React from 'react'
import { Astroid, ArrowUpRight } from 'lucide-react'
import sew from '../assets/images/sew.png'
import "../styles/sections.css"

export default function Brand() {
  return (
	<>
    <div id='brand' className="section-divider">
      <span className='marker'><Astroid size={16}/></span>
      <span className='num'>02</span>
      <div className='line-divider'></div>
      <span className='section-label'>Brand</span>
    </div>

    <section  className='portfolio-section'>

      <div className='section-statement'>
        <img src={sew} alt='sewing machine'/>

      </div>

      <div className='section-info'>
        <p className='section-statement'>
          Founder of Charms Dancewear
        </p> 
        
        <p>
          What started in 2012 as making my own leotards while dancing with San Diego Ballet grew into Charms Dancewear, a custom dancewear and costume brand that I built and operated for over 10 years. As the founder, I owned the entire product lifecycle, from branding and visual identity to customer collaboration, design, pattern development, production, and delivery. Running every aspect of the business showed me that what I enjoy most isn't just creating the final product, it's solving problems, iterating on ideas, and designing experiences that better serve the people using them.        
        </p>
        <a 
          href="https://etsy.com/shop/charmsdancewear"           
          target="_blank"
          className="section-link">
            visit charms dancewear 
            <ArrowUpRight/>
        </a>  


        
      </div>

      
      
    </section>
    </>
  )
}
