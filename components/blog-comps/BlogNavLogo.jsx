import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BlogNavLogoImg from '../../public/assets/logo.png'
const BlogNavLogo = () => {
  return(
  <div className='flex justify-center items-center gap-2 w-full h-full'>
        <p className=' '>Gabster's</p>
        <Link className='' href='/'>
            <a>
                <Image 
                src={BlogNavLogoImg}
                alt='/'
                width='50'
                height='50'
                className='cursor-pointer'
                /> 
            </a>
        </Link>
        <p className=''>Dev Blog</p>
  </div>
  
    
  )
}

export default BlogNavLogo