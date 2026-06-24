import React from 'react'
import headshot from "../assets/images/casual_bw.png"
import "../styles/Home.css"


export default function Home() {
  return (
    <section id='home' className='home-section'>
      <div className='home-text'>
        <h1>Sharmaine<br/>Perea</h1>
        <p className='home-subtitle'>Software Engineer</p>
      </div>
      <div className='home-photo'>
        <img src={headshot} alt='Sharmaine Perea'/>
      </div>
    </section>
  )
}
