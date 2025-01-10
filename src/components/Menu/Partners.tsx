import React from 'react'
import Image from 'next/image'

const Partners = () => {
  return (
    <div className='justify-center w-full h-full'>
        <div  className='text-center'>
        <p className='text-black'> Partners & Clients</p>
        <h1 className='text-black text-2xl font-bold'>We work with the best pepole</h1>
        </div>
        <div className='flex items-center justify-center gap-x-14 p-20'>
            <div>
                <Image
                src="/Partner1.svg"
                alt="partner1"
                width={100}
                height={100}   
                />
            </div>
            <div>
                <Image
                src="/Partner2.svg"
                alt="partner1"
                width={100}
                height={100}   
                />
            </div>
            <div>
                <Image
                src="/Partner3.svg"
                alt="partner1"
                width={100}
                height={100}   
                />
            </div>
            <div>
                <Image
                src="/Partner4.svg"
                alt="partner1"
                width={100}
                height={100}   
                />
            </div>
            <div>
                <Image
                src="/Partner5.svg"
                alt="partner1"
                width={100}
                height={100}   
                />
            </div>
            <div>
                <Image
                src="/Partner6.svg"
                alt="partner1"
                width={100}
                height={100}   
                />
            </div>
        </div>
    </div>
  )
}

export default Partners
