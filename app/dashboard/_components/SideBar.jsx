  'use client'
  import { Progress } from "@/components/ui/progress"
  import React from 'react'
  import Link from 'next/link'
  import Image from 'next/image'
  import { HiHome } from "react-icons/hi2";
  import { HiMiniBuildingOffice2 } from "react-icons/hi2";
  import { HiMiniShieldCheck } from "react-icons/hi2";
  import { HiMiniPower } from "react-icons/hi2";
import { usePathname } from 'next/navigation'

  function SideBar() {
      const Menu=[
          {
              id:1,
              name:'Home',
              icon:<HiHome />,
              path:'/dashboard'
          },
          {
              id:2,
              name:'Explore',
              icon:<HiMiniBuildingOffice2 />,
              path:'/dashboard/explore'
          }  ,
          {
              id:3,
              name:'Upgrade',
              icon:<HiMiniShieldCheck />,
              path:'/dashboard/upgrade'
          },
          {
              id:4,
              name:'Logout',
              icon:<HiMiniPower />,
              path:'/dashboard/logout'
          },
            
      ]
      const path=usePathname();
    return (
      <div className={'fixed h-full md:w-64 p-5 shadow-md'}>
          <Image src={'/logo.svg'} width={100} height={90} alt={"logo"}/>
          <hr className='my-5'/>        
          <ul>
    {Menu.map((item) => (
      
      <li key={item.id}>
        <Link href={item.path}>
        <div
              className={`flex items-center gap-2 p-3 cursor-pointer rounded-lg mb-3xs
              ${item.path === path ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-100 hover:text-black'}`}
            >
          <div className="text-3xl">{item.icon}</div>
          <h2>{item.name}</h2>
        </div>
        </Link>
      </li>
    ))}
  </ul>
  <div className='absolute bottom-10 w-[80%]'>
    <Progress value={33} />
    <h2 className='text-sm my-2'>3 out of 5 course created</h2>
    <h2 className='text-xs text-gray-500'>Upgrade your plan for unlimated course generate</h2>


  </div>

      </div>


    )
  }

  export default SideBar