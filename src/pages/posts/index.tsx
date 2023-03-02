import { useState } from 'react';
import { Button } from 'antd';
import * as Styled from './posts.page.styled';
import { useGetPostsQuery } from '../../redux/services/post-api';
import PostModal from '../../components/post-modal';

const PostsPage = () => {
  const { data, isLoading } = useGetPostsQuery();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const createHandler = () => {
    setIsModalOpen(true);
  }

  const closeModalHandler = () => {
    setIsModalOpen(false);
  }

  return (
    <Styled.Wrapper isLoading={isLoading}>
      <Styled.Header>
        <Button onClick={createHandler}>Create new</Button>
      </Styled.Header>
      {data && <Styled.List posts={data} />}
      <PostModal open={isModalOpen} closeHandler={closeModalHandler} />
    </Styled.Wrapper>
  );
};

export default PostsPage;
