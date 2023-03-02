import { Card, Button, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { useParams, useNavigate } from 'react-router-dom';
import * as Styled from './post.page.styled';
import { useDeletePostMutation, useGetPostQuery } from '../../redux/services/post-api';
import { ROUTES } from '../../constants/routes';
import { useState } from 'react';
import PostModal from '../../components/post-modal';
import CommentCard from '../../components/comment-card';
import CommentModal from '../../components/comment-modal';


const PostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: post, isLoading } = useGetPostQuery(Number(id));
  const [deletePost, { isSuccess: deleteSuccess }] = useDeletePostMutation();
  const [modal, contextHolder] = Modal.useModal();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState<boolean>(false);

  const deleteHandler = () => {
    modal.confirm({
      title: 'Are you sure you want to delete this post?',
      icon: <ExclamationCircleOutlined />,
      okText: 'Confirm',
      cancelText: 'Cancel',
      onOk: () => {
        deletePost(Number(id));
      }
    });
  }

  const editHandler = () => {
    setIsModalOpen(true);
  }

  const addCommentHandler = () => {
    setIsCommentModalOpen(true);
  }

  const closeModalHandler = () => {
    setIsModalOpen(false);
  }

  const closeCommentModalHandler = () => {
    setIsCommentModalOpen(false);
  }

  if (deleteSuccess) {
    navigate(ROUTES.ROOT);
  }

  return (
    <Styled.Wrapper isLoading={isLoading}>
      {contextHolder}
      {post && <> 
        <Card title={<Styled.Title>{post.title}</Styled.Title>}>
          {post.body}
          <Styled.ButtonsContainer>
            <Button onClick={editHandler}>Edit</Button>
            <Button danger onClick={deleteHandler}>Delete</Button>
          </Styled.ButtonsContainer>
        </Card>
        <Styled.CommentsTitle>Comments</Styled.CommentsTitle>
        <Styled.CommentList>
          {post.comments.map(comment => <CommentCard comment={comment} key={comment.id} />)}
        </Styled.CommentList>
        <Button onClick={addCommentHandler}>Add comment</Button>
      <CommentModal 
        open={isCommentModalOpen} 
        closeHandler={closeCommentModalHandler} 
        postId={post.id}
      />
      </>}
      <PostModal open={isModalOpen} closeHandler={closeModalHandler} post={post} />
    </Styled.Wrapper>
  );
};

export default PostPage;
