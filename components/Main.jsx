import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Let's Build Legendary Stuff!</p>
                    <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#0c7feb]'>Gab</span> </h1>
                    <h1 className='py-2 text-gray-700'>A Web3 Developer</h1>
                    <p className='py-4 text-gray-600 max-w[70%] m-auto'>
                        I'm A Web3 Explorer and Developer specializing in building and developing Web3 Applications, ranging from
                        De-Fi, NFTs, Marketplaces and more! Currently, I'm focused on building experimental NFT Projects while improving
                        my development skills in other areas. 
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <a href="https://www.linkedin.com/in/kevin-karl-jornacion-ab94aa8b/" target='_blank'
                        rel='noreferrer'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaLinkedin></FaLinkedin>
                            </div>
                        </a>
                        <a href="https://github.com/gabster-code" target='_blank'
                        rel='noreferrer'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaGithub></FaGithub>
                            </div>
                        </a>
                        <Link href='/#contact'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineMail></AiOutlineMail>
                            </div>
                        </Link>
                        <Link href='/resume'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonLinesFill></BsFillPersonLinesFill>
                        </div>
                        </Link>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Main