import React from 'react'
import FeaturedCard from './FeaturedCard'

//{ title, image, excert, dateposted}
const FeaturedContent = () => {
    let title ='Test Title'
    let image ="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
    let excerpt= "This is a wider card with supporting ASDASDASDASDASdtext below as a natural lead-in to additional content. This content is a little bit longer."
    let dateposted='Last updated 3 mins ago'
    return (
        <div className=''>
            
                        
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
                 
           
  )
}

export default FeaturedContent