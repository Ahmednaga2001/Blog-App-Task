import Image from 'next/image';
import React from 'react';
import Link from 'next/link'
const NavBar = () => {
    return (
      <nav className='bg-gray-200 fixed top-0  w-full z-10'>
        <div className="container mx-auto p-4 ">
            <div className="grid grid-cols-2 items-center">
                <div className="barnd flex justify-center">
                    <Link href="/"><Image src="/logo.jpg" alt='logo' width={70} height={70} className='w-[70px] h-[70px] rounded-full'/></Link>
                </div>
                <div className='flex justify-center '>
                    <Link href="/posts" className='bg-yellow-300 px-5 py-2 text-[18px] rounded-md shadow-md font-semibold'>Create Post</Link>
                </div>
            </div>
        </div>
      </nav>
    );
}

export default NavBar;
