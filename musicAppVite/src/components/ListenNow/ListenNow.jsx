import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ListenNow( {url} ) {
  return (
    <a
        className='listen-now-link'
        href={url}
        target='_blank'
        rel="noopener"
        aria-label='Listen Now'
    >
        <FontAwesomeIcon icon="fa-solid fa-music" />
    </a>
  )
}
