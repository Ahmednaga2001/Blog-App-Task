import React from 'react';
import Image from 'next/image';
import BreadCrumbClient from '../../_component/BreadCrumbClient';
async function getData(id) {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  if (!res.ok) {
        throw new Error('Failed to fetch data')
  }
  return res.json()
   
  }
const PostDetails = async({params}) => {
    const post = await getData(params.id)
    return (
        <>
            {
                 <div className='blog mt-[102px]'>
                    <div className="container mx-auto p-4">
                        <div className='my-[50px]'>
                           <BreadCrumbClient/>
                        </div>
                        <div className="md:w-[50%] mx-auto shadow-md p-4 mb-5" >
                            <div>
                                <Image src="/person.jpeg" width={100} height={100} alt='default image' className='w-[100px] h-[100px] rounded-full' />
                            </div>
                            <div className="blog-body pt-4">
                                <h2 className='font-bold text-xl'>{post?.title}</h2>
                                {
                                    post?.tags?.map((tage)=>(<h2 className='text-gray-500 text-lg font-semibold pt-1'>{tage}</h2>))
                                }
                                <p className='pt-1'>{post?.body}</p>
                            </div>
                            <div className='pt-4 flex justify-between'>
                                <h3 className='text-orange-700'>Likes <span className='text-orange-400'>{post?.reactions?.likes}</span></h3>
                                <h3 className='text-orange-700'>DisLikes <span className='text-orange-400'>{post?.reactions?.dislikes}</span></h3>

                            </div>
                        </div>
                    </div>
                </div>
                    
            }
        </>


    );
}

export default PostDetails;
