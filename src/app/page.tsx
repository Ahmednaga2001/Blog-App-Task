
import Blogs from "./_component/Blogs"
import {IPostData} from "./types/index"
async function getData():Promise<IPostData>{
  const res = await fetch('https://dummyjson.com/posts')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
export default async function Home() {
  const postData= await getData();
  return (
    <Blogs postData={postData} />
  );
}
