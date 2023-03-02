import { FC, ReactNode } from 'react';
import { Spin } from 'antd';
import * as Styled from './loading-wrapper.styled';

interface LoadingWrapperProps {
  isLoading: boolean;
  children?: ReactNode;
  className?: string;
}

const LoadingWrapper: FC<LoadingWrapperProps> = ({ isLoading, children, className }) => {

  if (isLoading) {
    return <Styled.LoadingWrapper className={className}>
      <Spin size="large" />
    </Styled.LoadingWrapper>
  }

  return (
    <Styled.Wrapper className={className}>
      {children}
    </Styled.Wrapper>
  );
};

export default LoadingWrapper;
