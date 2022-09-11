import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BlogNavLogoImg from '../../public/assets/logo.png'
const BlogNavLogo = () => {
  return(
  <div className='flex justify-center items-center w-full h-full'>
        <p className='mr-3 '>Gabster's</p>
        <Link href='/'>
            <a>
                <Image 
                src={BlogNavLogoImg}
                alt='/'
                width='60'
                height='60'
                className='cursor-pointer'
                /> 
            </a>
        </Link>
        <p className='ml-3'>Dev Blog</p>
  </div>
  
    
  )
}

export default BlogNavLogo