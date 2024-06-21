import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IPost } from "../_types";
const BlogItem = ({ post }: { post: IPost }) => {
  return (
    <>
      <div className="md:w-[50%] mx-auto shadow-md p-4 mb-5">
        <div>
          <Image
            src="/person.jpeg"
            alt={post?.title}
            width={100}
            height={100}
            className="w-[100px] h-[100px] rounded-full"
          />
        </div>
        <div className="blog-body pt-4">
          <h2 className="font-bold text-xl">{post?.title}</h2>
          <p className="pt-1">{post?.body.substring(0, 100)}...</p>
          <Link
            href={`/posts/${post?.id}`}
            className="block pt-1 text-blue-500"
          >
            Read more
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogItem;
