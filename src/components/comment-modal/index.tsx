import { FC, useState } from 'react';
import { Input, Modal } from 'antd';
import * as Styled from './comment-modal.styled';
import { useCreateCommentMutation } from '../../redux/services/post-api';

interface CommentModalProps {
  open: boolean;
  closeHandler: () => void;
  postId: number;
}

const CommentModal: FC<CommentModalProps> = ({ open, closeHandler, postId }) => {
  const [createComment, { isLoading}] = useCreateCommentMutation();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [body, setBody] = useState<string>('');

  const okHandler = async () => {
    await createComment({ postId, name, email, body });
    setName('');
    setEmail('');
    setBody('');
    closeHandler();
  }

  return (
    <Modal 
      open={open}
      onCancel={closeHandler}
      title='New comment'
      onOk={okHandler}
    >
      <Styled.InputsContainer>
        <Input.TextArea 
          placeholder="Name"
          value={name} 
          onChange={(e) => setName(e.target.value)}
          autoSize
        />
        <Input.TextArea
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
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

export default CommentModal;
