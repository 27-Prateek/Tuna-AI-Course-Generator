// import Image from 'next/image'
// import React from 'react'
// import { Button } from "../../components/ui/button";

// function Header() {
//   return (
//     <div className='flex justify-between p-6 shadow-sm items-center'>
//       <Image src="/logo.svg" width={100} height={90} alt="logo" />
//       <Button className="bg-[#5cbfb5] text-white hover:bg-[#4fb3a9]"> Get Started</Button>
//     </div>
//   )
// }

// export default Header
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../../components/ui/button";

function Header() {
  return (
    <div className="flex justify-between p-6 shadow-sm items-center">
      <Image src="/logo.svg" width={100} height={90} alt="logo" />

      <Link href="/dashboard">
        <Button className="bg-[#5cbfb5] text-white hover:bg-[#4fb3a9]">
          Get Started
        </Button>
      </Link>
    </div>
  );
}

export default Header;
