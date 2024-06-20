import BlogItem from "./BlogItem";
import BlogSkelton from "../_component/BlogSkelton";
import {Post} from "../types/common"
const Blogs = ({ postData }) => {
  return (
    <div className='blogs mt-[102px]'>
      <div className="container mx-auto p-4">
          {postData.posts.map((post) => (
            <BlogItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
