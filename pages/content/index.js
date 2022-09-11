import React from 'react'
import BlogNav from '../../components/blog-comps/BlogNav'
import Home from '../../components/blog-comps/Home'
import FeaturedContent from '../../components/blog-comps/FeaturedContent'
BlogNav
const index = () => {
  return (
  <>
    <BlogNav></BlogNav>
    <FeaturedContent />
    <Home />
    <div>index</div>
  </>
    
  )
}

export default index