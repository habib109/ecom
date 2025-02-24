import React from 'react'
import Image from './Image'
import logo01 from '/logo01.png'
import logo02 from '/logo02.png'
import logo03 from '/logo03.png'
import logo04 from '/logo04.png'
import logo05 from '/logo05.png'
import logo06 from '/logo06.png'
import logo07 from '/logo07.png'

const Logoimg = () => {
  return (
    <div className='flex gap-5 items-center'>
        <Image className="py-2 px-5" src={logo01} />
        <Image className="py-2 px-5" src={logo02} />
        <Image className="py-2 px-5" src={logo03} />
        <Image className="py-2 px-5" src={logo04} />
        <Image className="py-2 px-5" src={logo05} />
        <Image className="py-2 px-5" src={logo06} />
        <Image className="py-2 px-5" src={logo07} />
    </div>
  )
}

export default Logoimg