'use client'
import React, { useState } from 'react';
import BreadCrumb from "../_component/BreadCrumb"
import { usePathname , useRouter } from 'next/navigation';
const CreatePost = () => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [tag , setTag] = useState("")
    const path = usePathname()
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) {
            console.log("Title is required");
        }
        if (!content.trim()) {
            console.log("content is required");
        }
        if (!tag.trim()) {
            console.log("Tag is required");
        }
        setTitle("");
        setContent("");
        setTag("");
        router.push("/")
    };

    return (
        <div className='post mt-[102px]'>
            <div className="container mx-auto p-4">
                <div className='my-[50px]'>
                    <BreadCrumb path={path} />
                </div>
                <div className='lg:w-[60%] md:w-full mx-auto bg-gray-800 shadow-md px-8 py-10 rounded-lg'>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-white text-sm font-bold mb-2">Title</label>
                            <input type="text" required id='title' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter title' className='border w-full rounded-md px-4 py-2 outline-none text-gray-800' />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="content" className="block text-white text-sm font-bold mb-2">Content</label>
                            <textarea id="content" required value={content} onChange={(e) => setContent(e.target.value)} placeholder='Enter content' className='w-full px-4 py-2 h-[120px] rounded-md outline-none text-gray-800'></textarea>
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="HeadlineAct" className="block text-white text-sm font-bold mb-2"> Tags </label>

                            <select onChange={(e)=>setTag(e.target.value)}
                                name="HeadlineAct"
                                id="HeadlineAct"
                                className="mt-1.5 w-full rounded-lg p-2 outline-none text-gray-700 sm:text-sm"
                            >
                                <option value="">Please select</option>
                                <option value="Arabic">Arabic</option>
                                <option value="Englich">English</option>
                                <option value="French">French</option>
                            </select>
                        </div>
                        <div className='flex justify-center'>
                            <button type="submit" className='bg-yellow-300 px-8 py-3 text-[18px] font-semibold rounded-md text-gray-800 hover:bg-yellow-400 focus:outline-none'>Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreatePost;
