import React from 'react'
import { featured, projects } from '../data/projects'

export default function Projects() {
	return (
		<div className='projects-container'>
			<FeaturedCard project={featured}/>
		</div>
	)
}

function FeaturedCard() {
	return (
		<div className='featured-card'>
			
		</div>
	)
}

function ProjectCard() {
	return (
		<div className='project-card'>
		</div>
	)
}


