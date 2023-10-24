import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function BuyNow( {url }) {
  return (
    <a
        className='buy-now-link'
        href={url}
        target='_blank'
        rel="noopener"
        aria-label='Buy Now'
    >
        <FontAwesomeIcon icon="fa-shopping-cart" />
    </a>
  )
}
