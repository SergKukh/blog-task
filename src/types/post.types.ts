export interface IPost {
  id: number;
  title: string;
  body: string;
}

export interface IComment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export interface IPostDetails extends IPost {
  comments: IComment[];
}

export interface CreatePostPayload {
  title: string;
  body: string;
}

export interface UpdatePostPayload {
  id: number;
  title?: string;
  body?: string;
}

export interface CreateCommentPayload {
  postId: number;
  name: string;
  email: string;
  body: string;
}
