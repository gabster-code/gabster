import Styles from './markdown-styles.module.css'
import { PortableText } from '@portabletext/react'
import SanityBlockContent from '@sanity/block-content-to-react'
export default function PostBody({ content }) {
  console.log("Content: ",content)
  return (

    // eslint-disable-next-line react/jsx-no-duplicate-props
    <div className="mx-auto max-w-2xl" style={Styles.markdown} >
      <SanityBlockContent blocks={content} />
    </div>
  )
}

