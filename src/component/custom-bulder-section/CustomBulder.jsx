import React from 'react'
import { Container } from '../../layout/Container'
import CustomBuildersProduct from '../../layout/CustomBuildersProduct'
import Image from '../../layout/Image'
import mainimg from '/pmainimg.png'

function CustomBulder() {
  return (


    <div className='mt-20 mb-10 bg-[#edede9] py-16'>

        <Container>

           <div className="main flex gap-3  ">

            <div className="left">
                <Image src={mainimg } />
            </div>


            <div className="right">
                <CustomBuildersProduct />
            </div>
           </div>
        </Container>

    </div> 
  )
}

export default CustomBulder