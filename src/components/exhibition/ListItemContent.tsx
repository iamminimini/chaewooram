import { useState } from 'react';
import Image from 'next/image';
import { Box, Divider, Typography } from '@mui/material';
import styled, { css } from 'styled-components';

const ListItemContent = ({ item }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ListItem key={item.id}>
      <Content>
        <VenueName color="#555">{item.venues[0].name}</VenueName>
        <ItemTitle gutterBottom fontWeight={600}>
          {item.title}
        </ItemTitle>
        <Box display="inline-flex" alignItems="center" justifyContent="center" gap={1}>
          <VenueCity color="#888">{item.venues[0].city}</VenueCity>
          <Divider orientation="vertical" flexItem />
          <VenueAddress color="#888">{item.venues[0].address1}</VenueAddress>
        </Box>
      </Content>
      <ImageContainer>
        {item.primaryimageurl && (
          <Image src={item.primaryimageurl} alt={item.title} layout="intrinsic" width={380} height={380} />
        )}
      </ImageContainer>
    </ListItem>
  );
};

export default ListItemContent;

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
        flex-direction: column;
        gap: 10px;
        padding: 30px 10px;
      }
    `;
  }}
`;

const Content = styled.div`
  width: 100%;
`;

const ImageContainer = styled.div``;

const VenueName = styled(Typography)`
  ${({ theme }) => {
    const { media } = theme;
    return css`
      ${media.tablet} {
        font-size: 14px;
      }
    `;
  }}
`;

const ItemTitle = styled(Typography)`
  ${({ theme }) => {
    const { media } = theme;
    return css`
      ${media.tablet} {
        font-size: 16px;
      }
    `;
  }}
`;

const VenueCity = styled.p`
  ${({ theme }) => {
    const { media } = theme;
    return css`
      font-size: 14px;
      color: #999;
      ${media.tablet} {
        font-size: 12px;
      }
    `;
  }}
`;

const VenueAddress = styled.p`
  ${({ theme }) => {
    const { media } = theme;
    return css`
      font-size: 14px;
      color: #999;
      ${media.tablet} {
        font-size: 12px;
      }
    `;
  }}
`;
