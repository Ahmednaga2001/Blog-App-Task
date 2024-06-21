export interface IPost {
  id: number;
  title: string;
  body: string;
  tags: string[];
  views: number;
  userId: number;
  reactions: {
    likes: number;
    dislikes: number;
  };
}

export interface IPostData {
  posts: [];
  total: number;
  skip: number;
  limit: number;
}

export interface IParams {
  params: {
    id: string;
  };
}
