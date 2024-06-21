import BlogItem from "./BlogItem";
import BlogSkelton from "../_component/BlogSkelton";
import { IPost, IPostData } from "../types";
const Blogs = ({ postData }: { postData: IPostData }) => {
  return (
    <div className="blogs mt-[102px]">
      <div className="container mx-auto p-4">
        {postData.posts.map((post: IPost) => (
          <BlogItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;

