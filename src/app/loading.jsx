import React from 'react';
import BlogSkelton from "../app/_component/BlogSkelton"
const Loading = () => {
    return (
        <div className='mt-[102px]'>
             {Array.from({ length: 10 }).map((_, index) => (
                <BlogSkelton key={index} />
             ))
             }
        </div>
    );
}

export default Loading;
