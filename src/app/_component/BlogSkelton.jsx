import Image from 'next/image';
import React from 'react';

const BlogSkelton = () => {
    return (
             <div className='blog mt-[102px] '>
            <div className="container mx-auto p-4">
                <div className="md:w-[50%] mx-auto bg-gray-100 animate-pulse p-4 mb-5" >
                    <div>
                        <Image src="/default-person.png" width={100} height={100} className='w-[100px] h-[100px] rounded-full' />
                    </div>
                    <div className="blog-body pt-4">
                        <h2 className='font-bold text-xl h-[20px] w-3/4 bg-gray-300'></h2>
                        <p className='pt-1 h-[20px] w-3/4 bg-gray-300 mt-4'></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogSkelton;
