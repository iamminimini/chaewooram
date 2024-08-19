import { useRouter } from 'next/navigation';
import styled, { css } from 'styled-components';

const ListItemContent = ({ item, handleNavigateToDetail }) => {
  const router = useRouter();

  return (
    <CardItem onClick={() => handleNavigateToDetail(item.objectNumber)}>
      <ItemHeader>
        <Title>{item.title}</Title>
        <SubTitle>{item.longTitle}</SubTitle>
      </ItemHeader>
      {item.webImage?.url ? (
        <ImageWrapper>
          <Image src={item.webImage.url} alt={item.title} />
        </ImageWrapper>
      ) : (
        <NoImage>No image available</NoImage>
      )}
    </CardItem>
  );
};

export default ListItemContent;

const CardItem = styled.div`
  width: calc(50% - 20px);
  padding: 20px;
  box-sizing: border-box;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    background-color: #000;
    color: #ededed;
  }
  ${({ theme }) => {
    const { media } = theme;
    return css`
      ${media.tablet} {
        width: 100%;
      }
    `;
  }}
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 200px; /* 이미지의 고정 높이 설정 */
  overflow: hidden;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ImageWrapper}:hover & {
    transform: scale(1.1); /* 이미지 확대 효과 */
  }
`;

const NoImage = styled.div`
  width: 100%;
  height: 200px; /* 고정 높이 설정 */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  border: 1px solid #ccc;
`;

const ItemHeader = styled.div`
  margin-bottom: 12px; /* 제목과 서브 제목 사이의 간격 설정 */
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const SubTitle = styled.div`
  font-size: 13px;
  line-height: 1.1;
  color: #777;
`;
