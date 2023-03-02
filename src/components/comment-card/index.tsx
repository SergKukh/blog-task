import { Card } from 'antd';
import { FC } from 'react';
import { IComment } from '../../types/post.types';

interface CommentCardProps {
  comment: IComment;
}

const CommentCard: FC<CommentCardProps> = ({ comment }) => {
  return (
    <Card title={`${comment.email} | ${comment.name}`}>
      {comment.body}
    </Card>
  );
};

export default CommentCard;
