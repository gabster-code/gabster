import Image from 'next/image'
import Link from 'next/link'
import React, {useState , useEffect} from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Kofi from './Kofi'
import BlogNavLogo from './BlogNavLogo'
import BlogNavLogoImg from '../../public/assets/logo.png'
const BlogNav = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () =>{
    setNav(!nav)
}

  //style={{ color: `${linkColor}` }}
  return (
    <div className='flex w-full h-full  flex-col text-xl font-[700]'>
      <div className='flex justify-around items-center w-full h-full pt-4'>
      <BlogNavLogo />
     
        <div onClick={handleNav} className='md:hidden mr-3'>
                <AiOutlineMenu size={25} />
        </div>
      </div>
      
      <hr className="h-full w-full mt-1 mb-1 border-accent-2" />
      <div className='flex justify-center items-center w-full h-full py-1'>
        <ul  className='hidden md:flex items-center' >
                <Link href='/start-here'><li className='ml-10 text-sm uppercase hover:border-b'><a>Start Here!</a></li></Link>
                <Link href='/tutorials'><li className='ml-10 text-sm uppercase hover:border-b'><a>Tutorials</a></li></Link>
                <Link href='/code-snippets'><li className='ml-10 text-sm uppercase hover:border-b'><a>Code Snippets</a></li></Link>
                <Link href='/'><li className='ml-10 text-sm uppercase hover:border-b'><a>Portfolio Website</a></li></Link>
                <li className='ml-10 text-sm uppercase hover:border-b'><Kofi/></li>
                
        </ul> 
      </div> 
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen z-10 bg-black/70' : ''}>
            <div className={
                nav 
                ? 'fixed left-0 top-0 w-[75%] sm:w=[60%] md:w-[45%] h-screen bg-[#ecf0f3] text-[#333333] p-10 eas-in duration-500 '  
                : 'fixed left-[-100%] top-0 eas-in duration-500 '}>
                <div>
                    <div className='flex w-full items-center justify-between '>
                    
                    <Link href='/blog'> 
                    <Image onClick={()=> setNav(false)} className='cursor-pointer' src={BlogNavLogoImg} alt='/' width='50' height='50'></Image>
                     </Link>
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose/>
                        </div>
                        
                    </div>
                    
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>Let's Build Legendary Stuff!</p>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link href='/start-here'><li  onClick={()=> setNav(false)} className='py-4 text-sm'>Start Here!</li></Link>
                        <Link href='/tutorials'><li onClick={()=> setNav(false)} className='py-4 text-sm'>Tutorials</li></Link>
                        <Link href='/code-snippets'><li  onClick={()=> setNav(false)}className='py-4 text-sm'>Code Snippets</li></Link>
                        <Link href='/'><li onClick={()=> setNav(false)} className='py-4 text-sm'>Portfolio Website</li></Link>
                        <li className=' py-4 text-sm'><Kofi/></li>
                    </ul>
                    <div className='pt-40'>
                        <p className='uppercase tracking-widest text-[#5651e5]'>Connect with Me!</p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaLinkedinIn />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaGithub />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <AiOutlineMail />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <BsFillPersonLinesFill />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <hr className="hidden w-full h-full md:flex mt-1 mb-1 border-accent-2" />
    </div>
  )
}

export default BlogNav