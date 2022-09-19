import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import propertyImg from '../public/assets/projects/property.jpg'
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import keyskdImg from '../public/assets/projects/keyskd.jpg'
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
                title="Keyskd's NFT Landing Page "
                backgroundImg={keyskdImg} 
                projectUrl='/keyskd'
                techStack='NextJS | Tailwind CSS | Javascript' />

                <ProjectItem 
                title='Test Page' 
                backgroundImg={comingImg} 
                projectUrl='/crypto'
                techStack='' />

                <ProjectItem 
                title='Placeholder' 
                backgroundImg={comingImg} 
                projectUrl='/'
                techStack='' />

                <ProjectItem 
                title='Placeholder' 
                backgroundImg={comingImg} 
                projectUrl='/'
                techStack='' />


            </div>
        </div>
    </div>
  )
}

export default Projects