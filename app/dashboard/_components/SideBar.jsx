// // // //   'use client'
// // // //   import { Progress } from "@/components/ui/progress"
// // // //   import React from 'react'
// // // //   import Link from 'next/link'
// // // //   import Image from 'next/image'
// // // //   import { HiHome } from "react-icons/hi2";
// // // //   import { HiMiniBuildingOffice2 } from "react-icons/hi2";
// // // //   import { HiMiniShieldCheck } from "react-icons/hi2";
// // // //   import { HiMiniPower } from "react-icons/hi2";
// // // // import { usePathname } from 'next/navigation'

// // // //   function SideBar() {
// // // //       const Menu=[
// // // //           {
// // // //               id:1,
// // // //               name:'Home',
// // // //               icon:<HiHome />,
// // // //               path:'/dashboard'
// // // //           },
// // // //           {
// // // //               id:2,
// // // //               name:'Explore',
// // // //               icon:<HiMiniBuildingOffice2 />,
// // // //               path:'/dashboard/explore'
// // // //           }  ,
// // // //           {
// // // //               id:3,
// // // //               name:'Upgrade',
// // // //               icon:<HiMiniShieldCheck />,
// // // //               path:'/dashboard/upgrade'
// // // //           },
// // // //           {
// // // //               id:4,
// // // //               name:'Logout',
// // // //               icon:<HiMiniPower />,
// // // //               path:'/dashboard/logout'
// // // //           },
            
// // // //       ]
// // // //       const path=usePathname();
// // // //     return (
// // // //       <div className={'fixed h-full md:w-64 p-5 shadow-md'}>
// // // //           <Image src={'/logo.svg'} width={100} height={90} alt={"logo"}/>
// // // //           <hr className='my-5'/>        
// // // //           <ul>
// // // //     {Menu.map((item) => (
      
// // // //       <li key={item.id}>
// // // //         <Link href={item.path}>
// // // //         <div
// // // //               className={`flex items-center gap-2 p-3 cursor-pointer rounded-lg mb-3xs
// // // //               ${item.path === path ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-100 hover:text-black'}`}
// // // //             >
// // // //           <div className="text-3xl">{item.icon}</div>
// // // //           <h2>{item.name}</h2>
// // // //         </div>
// // // //         </Link>
// // // //       </li>
// // // //     ))}
// // // //   </ul>
// // // //   <div className='absolute bottom-10 w-[80%]'>
// // // //     <Progress value={33} />
// // // //     <h2 className='text-sm my-2'>3 out of 5 course created</h2>
// // // //     <h2 className='text-xs text-gray-500'>Upgrade your plan for unlimated course generate</h2>


// // // //   </div>

// // // //       </div>


// // // //     )
// // // //   }

// // // //   export default SideBar

// // // 'use client';
// // // import { auth } from '@clerk/nextjs/server'
// // // import { Progress } from "@/components/ui/progress";
// // // import React, { useEffect, useState } from "react";
// // // import Link from "next/link";
// // // import Image from "next/image";
// // // import {
// // //   HiHome,
// // //   HiMiniBuildingOffice2,
// // //   HiMiniShieldCheck,
// // //   HiMiniPower,
// // // } from "react-icons/hi2";
// // // import { usePathname } from "next/navigation";
// // // import { useUser } from "@clerk/nextjs";
// // // import { getUserStats } from "@/app/actions/getUserStats";

// // // function SideBar = async ()=> {
// // //   const path = usePathname();c
// // //   const { user, isLoaded } = useUser();
// // //   const { has } = await auth();
// // //   const stats = has({ plan: 'Yearly Subscription' })

// // //   // const [stats, setStats] = useState({
// // //   //   totalCourses: 0,
// // //   //   hasMembership: false,
// // //   // });

// // //   const COURSE_LIMIT = 5;

// // //   useEffect(() => {
// // //     if (!isLoaded || !user) return;

// // //     fetchStats();
// // //   }, [isLoaded, user]);

// // //   const fetchStats = async () => {
// // //     const data = await getUserStats(
// // //       user.primaryEmailAddress.emailAddress
// // //     );
// // //     setStats(data);
// // //   };

// // //   const progressValue = stats.hasMembership
// // //     ? 100
// // //     : Math.min(
// // //         (stats.totalCourses / COURSE_LIMIT) * 100,
// // //         100
// // //       );

// // //   const Menu = [
// // //     { id: 1, name: "Home", icon: <HiHome />, path: "/dashboard" },
// // //     {
// // //       id: 2,
// // //       name: "Explore",
// // //       icon: <HiMiniBuildingOffice2 />,
// // //       path: "/dashboard/explore",
// // //     },
// // //     {
// // //       id: 3,
// // //       name: "Upgrade",
// // //       icon: <HiMiniShieldCheck />,
// // //       path: "/dashboard/upgrade",
// // //     },
// // //     {
// // //       id: 4,
// // //       name: "Logout",
// // //       icon: <HiMiniPower />,
// // //       path: "/dashboard/logout",
// // //     },
// // //   ];

// // //   return (
// // //     <div className="fixed h-full md:w-64 p-5 shadow-md bg-white">
// // //       <Image src="/logo.svg" width={100} height={90} alt="logo" />
// // //       <hr className="my-5" />

// // //       <ul>
// // //         {Menu.map((item) => (
// // //           <li key={item.id}>
// // //             <Link href={item.path}>
// // //               <div
// // //                 className={`flex items-center gap-2 p-3 rounded-lg cursor-pointer
// // //                 ${
// // //                   item.path === path
// // //                     ? "bg-gray-100 text-black"
// // //                     : "text-gray-600 hover:bg-gray-100"
// // //                 }`}
// // //               >
// // //                 <div className="text-2xl">{item.icon}</div>
// // //                 <h2>{item.name}</h2>
// // //               </div>
// // //             </Link>
// // //           </li>
// // //         ))}
// // //       </ul>

// // //       {/* 🔥 Progress Section */}
// // //       <div className="absolute bottom-10 w-[80%]">
// // //         <Progress value={progressValue} />

// // //         {stats.hasMembership ? (
// // //           <>
// // //             <h2 className="text-sm my-2 font-medium">
// // //               Unlimited courses 🎉
// // //             </h2>
// // //             <h2 className="text-xs text-gray-500">
// // //               Thanks for being a member
// // //             </h2>
// // //           </>
// // //         ) : (
// // //           <>
// // //             <h2 className="text-sm my-2">
// // //               {stats.totalCourses} out of {COURSE_LIMIT} courses created
// // //             </h2>
// // //             <h2 className="text-xs text-gray-500">
// // //               Upgrade for unlimited courses
// // //             </h2>
// // //           </>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default SideBar;


// // 'use client';

// // import React from "react";
// // import Link from "next/link";
// // import Image from "next/image";
// // import { usePathname } from "next/navigation";
// // import { Progress } from "@/components/ui/progress";
// // import { useAuth } from "@clerk/nextjs";
// // import {
// //   HiHome,
// //   HiMiniBuildingOffice2,
// //   HiMiniShieldCheck,
// //   HiMiniPower,
// // } from "react-icons/hi2";

// // function SideBar() {
// //   const path = usePathname();
// //   const { has, isLoaded } = useAuth();

// //   const COURSE_LIMIT = 5;

// //   if (!isLoaded) return null;

// //   const hasMembership = has({ plan: "Yearly Subscription" });

// //   const totalCourses = 0; // optional: remove progress logic entirely if not needed

// //   const progressValue = hasMembership
// //     ? 100
// //     : Math.min((totalCourses / COURSE_LIMIT) * 100, 100);

// //   const Menu = [
// //     { id: 1, name: "Home", icon: <HiHome />, path: "/dashboard" },
// //     {
// //       id: 2,
// //       name: "Explore",
// //       icon: <HiMiniBuildingOffice2 />,
// //       path: "/dashboard/explore",
// //     },
// //     {
// //       id: 3,
// //       name: "Upgrade",
// //       icon: <HiMiniShieldCheck />,
// //       path: "/dashboard/upgrade",
// //     },
// //     {
// //       id: 4,
// //       name: "Logout",
// //       icon: <HiMiniPower />,
// //       path: "/dashboard/logout",
// //     },
// //   ];

// //   return (
// //     <div className="fixed h-full md:w-64 p-5 shadow-md bg-white">
// //       <Image src="/logo.svg" width={100} height={90} alt="logo" />
// //       <hr className="my-5" />

// //       <ul>
// //         {Menu.map((item) => (
// //           <li key={item.id}>
// //             <Link href={item.path}>
// //               <div
// //                 className={`flex items-center gap-2 p-3 rounded-lg cursor-pointer
// //                 ${
// //                   item.path === path
// //                     ? "bg-gray-100 text-black"
// //                     : "text-gray-600 hover:bg-gray-100"
// //                 }`}
// //               >
// //                 <div className="text-2xl">{item.icon}</div>
// //                 <h2>{item.name}</h2>
// //               </div>
// //             </Link>
// //           </li>
// //         ))}
// //       </ul>

// //       {/* 🔥 Progress Section */}
// //       <div className="absolute bottom-10 w-[80%]">
// //         <Progress value={progressValue} />

// //         {hasMembership?(
// //           <>
// //             <h2 className="text-sm my-2 font-medium">
// //               Unlimited courses 🎉
// //             </h2>
// //             <h2 className="text-xs text-gray-500">
// //               Thanks for being a member
// //             </h2>
// //           </>
// //         ) : (
// //           <>
// //             <h2 className="text-sm my-2">
// //               Free plan — limited courses
// //             </h2>
// //             <h2 className="text-xs text-gray-500">
// //               Upgrade for unlimited courses
// //             </h2>
// //           </>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default SideBar;
// 'use client';


// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { Progress } from "@/components/ui/progress";
// import {
//   HiHome,
//   HiMiniBuildingOffice2,
//   HiMiniShieldCheck,
//   HiMiniPower,
// } from "react-icons/hi2";

// function SideBar({ hasYearly }) {
//   console.log("Yearly plan:", hasYearly);

//   const path = usePathname();

//   const COURSE_LIMIT = 5;
//   const totalCourses = 0; // optional: wire later from DB

//   const progressValue = hasYearly
//     ? 100
//     : Math.min((totalCourses / COURSE_LIMIT) * 100, 100);

//   const Menu = [
//     { id: 1, name: "Home", icon: <HiHome />, path: "/dashboard" },
//     {
//       id: 2,
//       name: "Explore",
//       icon: <HiMiniBuildingOffice2 />,
//       path: "/dashboard/explore",
//     },
//     {
//       id: 3,
//       name: "Upgrade",
//       icon: <HiMiniShieldCheck />,
//       path: "/dashboard/upgrade",
//     },
//     {
//       id: 4,
//       name: "Logout",
//       icon: <HiMiniPower />,
//       path: "/dashboard/logout",
//     },
//   ];

//   return (
//     <div className="fixed h-full md:w-64 p-5 shadow-md bg-white">
//       <Image src="/logo.svg" width={100} height={90} alt="logo" />
//       <hr className="my-5" />

//       <ul>
//         {Menu.map((item) => (
//           <li key={item.id}>
//             <Link href={item.path}>
//               <div
//                 className={`flex items-center gap-2 p-3 rounded-lg cursor-pointer
//                 ${
//                   item.path === path
//                     ? "bg-gray-100 text-black"
//                     : "text-gray-600 hover:bg-gray-100"
//                 }`}
//               >
//                 <div className="text-2xl">{item.icon}</div>
//                 <h2>{item.name}</h2>
//               </div>
//             </Link>
//           </li>
//         ))}
//       </ul>

//       {/* 🔥 Progress Section */}
//       <div className="absolute bottom-10 w-[80%]">
//         <Progress value={progressValue} />

//         {hasYearly ? (
//           <>
//             <h2 className="text-sm my-2 font-medium">
//               Unlimited courses 🎉
//             </h2>
//             <h2 className="text-xs text-gray-500">
//               Thanks for being a member
//             </h2>
//           </>
//         ) : (
//           <>
//             <h2 className="text-sm my-2">
//               Free plan — limited courses
//             </h2>
//             <h2 className="text-xs text-gray-500">
//               Upgrade for unlimited courses
//             </h2>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default SideBar;
'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Progress } from "@/components/ui/progress";
import { useClerk } from "@clerk/nextjs";
import {
  HiHome,
  HiMiniBuildingOffice2,
  HiMiniShieldCheck,
  HiMiniPower,
} from "react-icons/hi2";

function SideBar({ hasYearly }) {
  const path = usePathname();
  const router = useRouter();
  const { signOut } = useClerk();

  const COURSE_LIMIT = 5;
  const totalCourses = 0;

  const progressValue = hasYearly
    ? 100
    : Math.min((totalCourses / COURSE_LIMIT) * 100, 100);

  const handleLogout = async () => {
    await signOut();
    router.push("/"); // or "/sign-in"
  };

  const Menu = [
    { id: 1, name: "Home", icon: <HiHome />, path: "/dashboard" },
    {
      id: 2,
      name: "Explore",
      icon: <HiMiniBuildingOffice2 />,
      path: "/dashboard/explore",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: <HiMiniShieldCheck />,
      path: "/dashboard/upgrade",
    },
    {
      id: 4,
      name: "Logout",
      icon: <HiMiniPower />,
      action: handleLogout, // 👈 not a link
    },
  ];

  return (
    <div className="fixed h-full md:w-64 p-5 shadow-md bg-white">
      <Image src="/logo.svg" width={100} height={90} alt="logo" />
      <hr className="my-5" />

      <ul>
        {Menu.map((item) => (
          <li key={item.id}>
            {item.path ? (
              <Link href={item.path}>
                <div
                  className={`flex items-center gap-2 p-3 rounded-lg cursor-pointer
                  ${
                    item.path === path
                      ? "bg-gray-100 text-black"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <div className="text-2xl">{item.icon}</div>
                  <h2>{item.name}</h2>
                </div>
              </Link>
            ) : (
              <div
                onClick={item.action}
                className="flex items-center gap-2 p-3 rounded-lg cursor-pointer text-gray-600 hover:bg-gray-100"
              >
                <div className="text-2xl">{item.icon}</div>
                <h2>{item.name}</h2>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* 🔥 Progress Section */}
      <div className="absolute bottom-10 w-[80%]">
        <Progress value={progressValue} />

        {hasYearly ? (
          <>
            <h2 className="text-sm my-2 font-medium">
              Unlimited courses 🎉
            </h2>
            <h2 className="text-xs text-gray-500">
              Thanks for being a member
            </h2>
          </>
        ) : (
          <>
            <h2 className="text-sm my-2">
              Free plan — limited courses
            </h2>
            <h2 className="text-xs text-gray-500">
              Upgrade for unlimited courses
            </h2>
          </>
        )}
      </div>
    </div>
  );
}

export default SideBar;
