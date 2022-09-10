import Styles from './markdown-styles.module.css'

/**
 * @sanity/block-content-to-react is being deprecated in favor of @portabletext/react
 * Read more about how to use this component here: https://github.com/portabletext/react-portabletext/blob/main/README.md
 */
import { PortableText } from '@portabletext/react'
export default function PostBody({ content }) {
  console.log("Content: ", content)
  return (

    // eslint-disable-next-line react/jsx-no-duplicate-props
    <div className="max-w-2xl mx-auto" >
      <PortableText value={content} />
    </div>
  )
}

