import { Skeleton } from '@mui/material';
import styled, { css } from 'styled-components';

const ShopSkeleton = () => {
  return (
    <>
      {Array.from(new Array(12)).map((_, index) => (
        <CardItem key={index}>
          <Content>
            <Skeleton variant="text" width={200} height={40} />
            <Skeleton variant="text" width={120} height={30} />
          </Content>
          <Skeleton variant="rectangular" width={'100%'} height={250} />
        </CardItem>
      ))}
    </>
  );
};

export default ShopSkeleton;

const CardItem = styled.div`
  width: calc(50% - 20px);
  ${({ theme }) => {
    const { media } = theme;
    return css`
      ${media.tablet} {
        width: 100%;
      }
    `;
  }}
`;

const Content = styled.div`
  ${({ theme }) => {
    const { colors, media } = theme;
    return css`
      width: 100%;
      margin-bottom: 10px;
    `;
  }}
`;
