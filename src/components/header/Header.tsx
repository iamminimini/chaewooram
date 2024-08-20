'use client';

import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRecoilState, useRecoilValue } from 'recoil';
import { favoritesState } from '@/recoil/favorites/atom';
import { userState } from '@/recoil/user/atom';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import { Avatar, Badge, Button } from '@mui/material';
import { css, styled } from 'styled-components';
import HeaderMenu from './HeaderMenu';
import MobileHeaderMenu from './MobileHeaderMenu';
import ProfileModal from './ProfileModal';

export const Header = () => {
  const [modalOpen, setModalOpen] = useState(false); // 프로필 모달

  const favorites = useRecoilValue(favoritesState); // 즐겨찾기
  const [user, setUser] = useRecoilState(userState);

  const router = useRouter();

  const handleFavorites = () => {
    router.push('/favorites');
  };

  return (
    <>
      <HeaderContainer>
        {/* 로고 */}
        <NavLink href="/">
          <Image src={'/images/favicon.png'} alt={'search icon'} width={100} height={30} />
        </NavLink>
        {/* 메뉴 버튼 */}
        {!isMobile && <HeaderMenu />}

        {/* 메뉴 */}
        <RightWrapper>
          {/* 장바구니 */}
          <Badge color="error" badgeContent={favorites?.length} onClick={handleFavorites}>
            <ThumbUpAltOutlinedIcon color="secondary" />
          </Badge>

          {/* 로그인 영역 */}
          {user?.id ? (
            <>
              <Avatar
                src={user.user_metadata.avatar_url}
                sx={{ width: 24, height: 24 }}
                onClick={() => setModalOpen(true)}
              />
              {/* 프로필 모달 */}
              <ProfileModal open={modalOpen} onClose={() => setModalOpen(false)} />
            </>
          ) : (
            <>
              <CustomButton href={'/login'}>LOGIN</CustomButton>
            </>
          )}

          {isMobile && <MobileHeaderMenu />}
        </RightWrapper>
      </HeaderContainer>
    </>
  );
};

export default Header;

const HeaderContainer = styled.header`
  ${({ theme }) => {
    const { colors, media } = theme;
    return css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background: black;
      display: flex;
      align-items: center;
      height: 48px;
      padding: 0 20px;
      z-index: 10;
      ${media.tablet} {
        justify-content: space-between;
      }
    `;
  }}
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 12px;
  display: flex;
  align-items: center;
  && svg {
    font-size: 20px;
  }
  &:hover {
    font-weight: bold;
  }
`;

const SubMenuItemList = styled.ul`
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 13px;

  > h4 {
    color: gray;
    margin-bottom: 10px;
  }
`;

const RightWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const CustomButton = styled(Button)`
  &&.MuiButton-colorPrimary {
    font-size: 13px;
  }
`;
