import styled from 'styled-components';
import LoadingWrapper from '../../layout/loading-wrapper';

export const Wrapper = styled(LoadingWrapper)``;

export const Title = styled.h1`
  font-size: 1.5rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  & > button {
    margin-right: 1rem;
  }
`;

export const CommentsTitle = styled.div`
  font-size: 1.3rem;
  margin: 0.7rem 0.5rem;
`;

export const CommentList = styled.div`
  & > div {
    margin-bottom: 1rem;
  }
`;
