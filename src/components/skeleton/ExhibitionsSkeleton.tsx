import { Box, Divider, Skeleton } from '@mui/material';
import styled, { css } from 'styled-components';

const ExhibitionsSkeleton = () => {
  return (
    <>
      {Array.from(new Array(5)).map((_, index) => (
        <ListItem key={index}>
          <Content>
            <Skeleton variant="text" width={100} />
            <Skeleton variant="text" width={200} height={40} />
            <Box display="inline-flex" alignItems="center" justifyContent="center" gap={1}>
              <Skeleton variant="text" width={60} />
              <Divider orientation="vertical" flexItem />
              <Skeleton variant="text" width={120} />
            </Box>
          </Content>
          <Skeleton variant="rectangular" width={380} height={200} />
        </ListItem>
      ))}
    </>
  );
};

export default ExhibitionsSkeleton;

const ListItem = styled.li`
  ${({ theme }) => {
    const { colors, media } = theme;
    return css`
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 30px 0;
      border-bottom: 1px solid #ededed;
      ${media.tablet} {
        font-size: 26px;
        word-break: keep-all;
        flex-direction: column;
      }
    `;
  }}
`;

const Content = styled.div`
  width: 100%;
`;
