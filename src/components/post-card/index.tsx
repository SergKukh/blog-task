import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './post-card.styled';
import { IPost } from '../../types/post.types';
import { ROUTES } from '../../constants/routes';

interface PostCardProps {
  post: IPost;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  const navigate = useNavigate()

  const clickHandeler = () => {
    navigate(ROUTES.POST.replace(':id', String(post.id)));
  }

  return (
    <Styled.Card 
      title={<Styled.Title onClick={clickHandeler}>{post.title}</Styled.Title>}
    >
      {post.body}
    </Styled.Card>
  );
};

export default PostCard;
