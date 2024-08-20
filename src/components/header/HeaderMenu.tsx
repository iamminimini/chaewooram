'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AnimatePresence, motion } from 'framer-motion';
import { styled } from 'styled-components';
import { menuItems } from './HeaderData';

export const HeaderMenu = () => {
  const [activeItemId, setActiveItemId] = useState<number | null>(null);
  const [isHover, setIsHover] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const [navListWidth, setNavListWidth] = useState<number>(0);
  const navListRef = useRef<HTMLUListElement>(null);

  const handleMouseEnter = useCallback((index: number) => {
    setActiveItemId(index);
    setIsHover(true);
    setTimeout(() => {
      setIsActive(true);
    }, 300);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTimeout(() => {
      setIsActive(false);
      setIsHover(false);
    }, 300);
  }, []);

  const subMenuAnimate = {
    enter: {
      visibility: 'visible' as const,
      height: 'auto',
      transition: {
        duration: 0.1,
        ease: 'easeInOut',
      },
    },
    exit: {
      visibility: 'hidden' as const,
      height: 0,
      transition: {
        duration: 0.1,
        ease: 'easeInOut',
      },
    },
  };

  useEffect(() => {
    if (navListRef.current) {
      setNavListWidth(navListRef.current.clientWidth);
    }
  }, [navListRef.current]);

  return (
    <>
      <NavWrapper onMouseEnter={() => handleMouseEnter(null)} onMouseLeave={handleMouseLeave}>
        <nav>
          <NavList ref={navListRef}>
            {menuItems?.map((item) => (
              <NavItem key={item.id} onMouseEnter={() => handleMouseEnter(item.id)}>
                <NavLink href={item.href} onClick={handleMouseLeave}>
                  {item.label} {item.submenu?.length > 0 && <KeyboardArrowDownIcon />}
                </NavLink>
                <AnimatePresence>
                  {activeItemId === item.id && isHover && item.submenu?.length && (
                    <MotionSubMenu
                      initial={isActive ? 'enter' : 'exit'}
                      animate="enter"
                      exit="exit"
                      variants={subMenuAnimate}
                    >
                      <SubMenuItemWrapper width={navListWidth}>
                        {item.submenu?.map((subItem, subItemIdex: number) => (
                          <SubMenuItem key={subItemIdex}>
                            {Object.entries(subItem)?.map(([subItemKey, subItemList], subItemListIndex) => (
                              <SubMenuItemList key={subItemListIndex}>
                                <h4>{subItemKey}</h4>
                                {subItemList?.map((subItemListItem, subItemListItemIndex) => (
                                  <SubMenuItemListItem key={subItemListItemIndex} href={subItemListItem.href}>
                                    {subItemListItem.label}
                                  </SubMenuItemListItem>
                                ))}
                              </SubMenuItemList>
                            ))}
                          </SubMenuItem>
                        ))}
                      </SubMenuItemWrapper>
                    </MotionSubMenu>
                  )}
                </AnimatePresence>
              </NavItem>
            ))}
          </NavList>
        </nav>
      </NavWrapper>
    </>
  );
};

export default HeaderMenu;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 35px;
  height: 48px;
  align-items: center;
`;

const NavWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const NavItem = styled.li``;

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

const MotionSubMenu = styled(motion.ul)`
  position: absolute;
  top: 48px;
  left: 0;
  width: 100vw;
  background: black;
  overflow: hidden;
  display: flex;
  justify-content: center;
  z-index: 10;
  padding: 40px;
`;

const SubMenuItemWrapper = styled.div<{ width: number }>`
  display: flex;
  gap: 70px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: ${({ width }) => width}px;
`;

const SubMenuItem = styled.div`
  display: flex;
  flex-direction: column;

  &:first-child > ul > a {
    font-size: 24px;
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

const SubMenuItemListItem = styled(Link)`
  padding: 5px 0;
`;
