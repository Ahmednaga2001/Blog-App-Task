
import Blogs from "./_component/Blogs"
// import {PostData} from "./types/common"
async function getData(){
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
