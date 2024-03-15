import React, { useEffect } from 'react'
import ProjectsList from './projectList'

export default function Projects() {

  
  return (
    <div id='Projects' className='bg-white   p-20 flex flex-col items-center justify-center'>
      
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10'>

      
      {ProjectsList.map((project) => (
        <div key={project.id}  className='flex flex-col'>
          <a target="_blank" href={project.link}>
            <img className='text-[26px] flex items-center justify-center rounded-3xl h-40 w-60 p-1 border-2 border-orange-700 border-glow' src={project.image} alt="project" />
          </a>
        
          <a target="_blank" href={project.github} className='flex gap-2 h-full lg:mt-4 justify-center mt-4 hover:text-orange-700 transition-all duration-150 ease-in-out text-[20px]'>
          {project.title}
          </a>
          
        </div>
      ))}

      </div>
    </div>
  )
}

