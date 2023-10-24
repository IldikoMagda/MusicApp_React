import React from 'react'

export default function ListenNow( {url} ) {
  return (
    <a
        className='listen-now-link'
        href={url}
        target='_blank'
        rel="noopener"
        aria-label='Listen Now'
    >
        <i class='fas fa-music' />
    </a>
  )
}
