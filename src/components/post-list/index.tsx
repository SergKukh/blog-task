import { FC } from 'react';
import { IPost } from '../../types/post.types';
import PostCard from '../post-card';
import * as Styled from './post-list.styled';

interface PostListProps {
  posts: IPost[];
  className?: string,
}

const PostList: FC<PostListProps> = ({ posts, className }) => {
  return (
    <Styled.Wrapper className={className}>
      {posts.map(post => <PostCard post={post} key={post.id} />)}
    </Styled.Wrapper>
  );
};

export default PostList;
