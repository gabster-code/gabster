import markdownStyles from './markdown-styles.module.css'
import { PortableText } from '@portabletext/react'

export default function PostBody({ content }) {
  return (
    // eslint-disable-next-line react/jsx-no-duplicate-props
    <div className="mx-auto max-w-2xl " className={markdownStyles.markdown}>
      <PortableText value={content} />
    </div>
  )
}