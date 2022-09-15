import Image from 'next/image'
import React from 'react'

const FeaturedCard = ({title, image, excerpt, dateposted}) => {
  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
      <img 
       src={image}
       className="object-cover w-full h-64"
       alt=""
      
       
       />
       
        

                 <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                traveling
              </a>
              <span className="text-gray-600">— {dateposted} </span>
            </p>
            <a
              href="/"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              {title}
            </a>
            <p className="mb-2 text-gray-700">
              {excerpt}
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div> 
   
  )
}

export default FeaturedCard