import React, { useEffect } from 'react'
import "../styles/Loader.css"

const beats = ["Ballerina", "Entrepreneur", "Software Engineer"]

export default function Loader({onComplete}) {
	useEffect(() => {
		const timer = setTimeout(onComplete, 5800)
		return () => clearTimeout(timer)
	}, [onComplete])

  return (
	<div className='loader'>
		<h1 style={{ animationDelay: '0s' }} >Sharmaine Perea</h1>
		{beats.map((word, index) => (
			<span 
				key={word} 
				className="loader-beat" 
				style={{ animationDelay: `${1.5 + index * 0.9}s` }}
			>
				{word}
			</span>
		))}
	</div>
  )
}
