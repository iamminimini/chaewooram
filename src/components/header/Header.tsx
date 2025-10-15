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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // 모바일 메뉴

  const favorites = useRecoilValue(favoritesState); // 즐겨찾기
  const [user, setUser] = useRecoilState(userState);

  const router = useRouter();

  const handleFavorites = () => {
    router.push('/favorites');
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <HeaderContainer>
        {/* 로고 */}
        <NavLink href="/">
          <Image
            src={'/images/favicon.png'}
            alt={'search icon'}
            width={100}
            height={30}
            style={{
              maxWidth: '100%',
              height: 'auto',
              maxHeight: '24px',
            }}
          />
        </NavLink>

        {/* 메뉴 버튼 */}
        {!isMobile && <HeaderMenu />}

        {/* 메뉴 */}
        <RightWrapper>
          {/* 장바구니 */}
          <Badge
            color="error"
            badgeContent={favorites?.length}
            onClick={handleFavorites}
            sx={{
              cursor: 'pointer',
              '& .MuiBadge-badge': {
                fontSize: isMobile ? '10px' : '12px',
                minWidth: isMobile ? '16px' : '18px',
                height: isMobile ? '16px' : '18px',
              },
            }}
          >
            <ThumbUpAltOutlinedIcon
              color="primary"
              sx={{
                fontSize: isMobile ? '20px' : '24px',
              }}
            />
          </Badge>

          {/* 로그인 영역 */}
          {user?.id ? (
            <>
              <Avatar
                src={user.user_metadata.avatar_url}
                sx={{
                  width: isMobile ? 20 : 24,
                  height: isMobile ? 20 : 24,
                  cursor: 'pointer',
                }}
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

          {isMobile && <MobileHeaderMenu isOpen={mobileMenuOpen} onToggle={handleMobileMenuToggle} />}
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
      background: #22242a;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 48px;
      padding: 0 20px;
      z-index: 10;

      ${media.mobile} {
        padding: 0 16px;
      }
    `;
  }}
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textOnlyWhite};
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

const RightWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  ${({ theme }) => {
    const { media } = theme;
    return css`
      ${media.mobile} {
        gap: 10px;
      }
    `;
  }}
`;

const CustomButton = styled(Button)`
  &&.MuiButton-colorPrimary {
    font-size: 13px;
    min-width: auto;
    padding: 6px 12px;
  }

  ${({ theme }) => {
    const { media } = theme;
    return css`
      ${media.mobile} {
        font-size: 11px;
        padding: 4px 8px;
        min-width: auto;
      }
    `;
  }}
`;
