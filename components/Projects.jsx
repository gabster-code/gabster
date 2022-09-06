import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import propertyImg from '../public/assets/projects/property.jpg'
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import comingImg from '../public/assets/projects/comingsoon.png'

import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#0c7feb]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>

             <ProjectItem 
                title='Test Page' 
                backgroundImg={comingImg} 
                projectUrl='/crypto' />

              <ProjectItem 
                title='Placeholder' 
                backgroundImg={comingImg} 
                projectUrl='/' />

                <ProjectItem 
                title='Placeholder' 
                backgroundImg={comingImg} 
                projectUrl='/' />

                <ProjectItem 
                title='Placeholder' 
                backgroundImg={comingImg} 
                projectUrl='/' />


            </div>
        </div>
    </div>
  )
}
// https://youtu.be/CMx51wpd7g4?t=4245
//
export default Projects