import { isMobile } from 'react-device-detect';
import styled, { css } from 'styled-components';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface CoverflowSwiperProps {
  data: { id: number; img: string }[];
}

const CoverflowSwiper = ({ data }: CoverflowSwiperProps) => {
  return (
    <SwiperContainer
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={isMobile ? 1 : 3}
      loop={true}
      autoplay={{
        delay: 1500,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination, Autoplay]}
    >
      {data.map((item) => (
        <SwiperSlideWrapper key={item.id} style={{ backgroundImage: `url(${item.img})` }}></SwiperSlideWrapper>
      ))}
    </SwiperContainer>
  );
};

export default CoverflowSwiper;

const SwiperContainer = styled(Swiper)`
  ${({ theme }) => {
    const { colors, media } = theme;
    return css`
      width: 100vw;
      padding: 120px 0px;
      margin-bottom: 50px;

      & .swiper-pagination {
        .swiper-pagination-bullet-active {
          background-color: ${(props) => props.theme.palette.secondary.main};
        }
      }
      & .swiper-slide-active {
        transform: scale(1.4) !important; /* 활성화된 슬라이드 두 배 크기로 설정 */
        transition: transform 0.3s ease; /* 변환 애니메이션 추가 */
      }

      ${media.tablet} {
        width: calc(100vw - 24px);
      }
    `;
  }}
`;

const SwiperSlideWrapper = styled(SwiperSlide)`
  margin-top: 40px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: #000;
  height: 350px;
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-size: cover; /* 배경 이미지 크기 조절 */
  background-position: center; /* 배경 이미지 위치 조정 */
`;
