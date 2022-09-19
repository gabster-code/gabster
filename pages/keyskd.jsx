import Image from 'next/image';
import React from 'react';
import keyskdImg from '../public/assets/projects/keyskd.jpg'
import keyskdDesImg from '../public/assets/projects/keyskddes.jpg'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const keyskd = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={keyskdImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Keyskd's Landing Page</h2>
          <h3>NextJS | Tailwind CSS | Javascript </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
         
          <h2 className='mb-5'>Project Overview</h2>
          <p>
            This landing page is both a token of appreciation to Keyskd but also my first attempt to actually create something
            based on learning NextJS as a framework and using TailwindCSS as the CSS Framework. The design was actually made a couple of months ago.
            <br></br><br></br>
            I used Figma for the initial designs and ended up using the first one since the Photo is really good 🤣
            In the initial design, there was a hamburger menu icon on the left side but I opted to not add any and just put the social icons in the middle
            since there are no other links to point to or have the need to a menu.
          </p>
          <br></br>
          <Image
          className='absolute z-1'
          src={keyskdDesImg}
          alt='/'
          />
          <br></br>
          <p>
            Anyway, the main goal for this website is for Keyskd to have a landing page for his NFT Music project as he is actually also a keyboard player for several 
            Filipino bands. It's another avenue for him to promote his solo project.
            <br></br><br></br>
          
          </p>
          <a
            href='https://github.com/gabster-code/keyskd'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 text-white'>Code</button>
          </a>
          <a
            href='https://keyskd.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 text-white'>Visit Website</button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> NextJS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
           
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default keyskd;