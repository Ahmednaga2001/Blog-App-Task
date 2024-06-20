
  
 export interface Post {
    id: number;
    title: string;
    body: string;
    tags: string[];
    views: number;
    userId: number;
    reactions : {
        likes: number;
        dislikes: number;
    }
  }
  
 export interface PostData {
    posts: Post[];
    total: number;
    skip: number;
    limit: number;
  }
  
