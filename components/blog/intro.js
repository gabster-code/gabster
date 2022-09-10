import Image from 'next/image'
import Link from 'next/link'
import { CMS_NAME, CMS_URL } from '../../helper/constants'
import logo from '../../public/assets/Asset 2.png'

export default function Intro() {
  return (
    <section className="mt-6 mb-16 flex flex-col items-center md:mb-12 md:flex-row md:justify-between">
      <h1 className="text-6xl font-bold leading-tight tracking-tighter md:pr-8 md:text-8xl">
      <a href="/"><Image 
        src={logo}
        alt=''
        width='375'
        height='114'
        className='cursor-pointer'>

        </Image></a> 
        
      </h1>
      <h4 className="mt-0 text-center text-lg md:pl-8 md:text-left">
        A statically generated blog example using{' '}
        <a
          href="https://nextjs.org/"
          className="underline transition-colors duration-200 hover:text-success"
        >
          Next.js
        </a>{' '}
        and{' '}
        <a
          href={CMS_URL}
          className="underline transition-colors duration-200 hover:text-success"
        >
          Sanity.io
        </a>
        .
      </h4>
    </section>
  )
}