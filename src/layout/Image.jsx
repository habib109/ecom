import React from 'react'
import { Link } from 'react-router'

const Image = ({classLink, className, src}) => {
  return (
    <picture>
        <Link className={`${classLink}`}>

        <img className={`${className}`} src={src} alt={src} />
        </Link>
    </picture>
  )
}

export default Image