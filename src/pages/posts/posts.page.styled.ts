import styled from 'styled-components';
import PostList from '../../components/post-list';
import LoadingWrapper from '../../layout/loading-wrapper';

export const Wrapper = styled(LoadingWrapper)``;

export const List = styled(PostList)`
  margin-top: 3rem;
`;

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3rem;
  background-color: #2616ff;
  z-index: 100;
  display: flex;
  align-items: center;
  padding: 0 2rem;
`;
