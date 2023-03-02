import { FC, useState } from 'react';
import { Modal, Input } from 'antd';
import * as Styled from './post-modal.styled';
import { IPost } from '../../types/post.types';
import { useCreatePostMutation, useUpdatePostMutation } from '../../redux/services/post-api';

interface PostModalProps {
  post?: IPost;
  open: boolean;
  closeHandler: () => void;
}

const PostModal: FC<PostModalProps> = ({ post, open, closeHandler }) => {
  const [title, setTitle] = useState<string>(post?.title || '');
  const [body, setBody] = useState<string>(post?.body || '');
  const [createPost, { isLoading: createLoading}] = useCreatePostMutation();
  const [updatePost, { isLoading: updateLoading }] = useUpdatePostMutation();

  const okHandler = async () => {
    if (post) {
      await updatePost({ id: post.id, title, body });
    } else {
      await createPost({ title, body });
    }
    closeModal();
  }

  const closeModal = () => {
    if (!post) {
      setTitle('');
      setBody('');
    }
    closeHandler();
  }

  return (
    <Modal 
      title={post ? 'Edit' : 'Create'} 
      open={open}
      onCancel={closeHandler}
      onOk={okHandler}
      okButtonProps={{
        loading: createLoading || updateLoading
      }}
    >
      <Styled.InputsContainer>
        <Input.TextArea 
          placeholder="Title"
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          autoSize
        />
        <Input.TextArea
          placeholder="Body" 
          value={body} 
          onChange={(e) => setBody(e.target.value)}
        />
      </Styled.InputsContainer>
    </Modal>
  );
};

export default PostModal;
