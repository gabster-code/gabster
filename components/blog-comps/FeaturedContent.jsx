import React from 'react'
import FeaturedCard from './FeaturedCard'

//{ title, image, excert, dateposted}
const FeaturedContent = () => {
    let title ='Test Title'
    let image ="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    let excerpt= "This is a wider card with supporting ASDASDASDASDASdtext below as a natural lead-in to additional content. This content is a little bit longer."
    let dateposted='Last updated 3 mins ago'
    return (
        <>
        <h1 className='mt-4 sm:max-w-sm ml-[30%] sm:mx-auto md:ml-[40.5%] lg:max-w-full '>Featured</h1>
        <div className='px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"'>
            <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                        
                        <FeaturedCard 
                            title={title}
                            image={image} 
                            excerpt={excerpt}
                            dateposted={dateposted} 
                        />

                        <FeaturedCard 
                            title={title}
                            image={image} 
                            excerpt={excerpt}
                            dateposted={dateposted} 
                        />

                        <FeaturedCard 
                            title={title}
                            image={image} 
                            excerpt={excerpt}
                            dateposted={dateposted} 
                        />
                    
            </div>    
         </div>
         </>  
           
  )
}

export default FeaturedContent