import React from 'react'
import Image from 'next/image'
import {UserButton} from '@clerk/nextjs'

function Header() {
  return (
    <div className='flex justify-between  items-center p-5'>
        <Image src={'/logo_old.svg'} width={57} height={57} alt={"old logo / favicon"} />
        <UserButton/>
    </div>
  )
}

export default Header