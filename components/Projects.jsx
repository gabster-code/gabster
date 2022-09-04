import Image from 'next/image'
import React from 'react'
import propertyImg from '../public/assets/projects/property.jpg'

const Projects = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#0c7feb]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>

                <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#0c7feb] to-[#6f97ee]'>
                    <Image src={} alt='/' />
                </div>

            </div>
        </div>
    </div>
  )
}
// https://youtu.be/CMx51wpd7g4?t=4245
export default Projects