'use client';

import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import { styled } from 'styled-components';
import { menuItems } from './HeaderData';

export const MobileHeader = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const handleMenuToggle = () => {
    toggleOpen();
  };

  return (
    <>
      <MobileMenuButton onClick={handleMenuToggle}>
        <MenuIcon />
      </MobileMenuButton>

      {/* 모바일 메뉴 */}
      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <MobileNavList>
              {menuItems?.map((item) => (
                <MobileNavItem key={item.id}>
                  <NavLink href={item.href} onClick={() => toggleOpen()}>
                    {item.label}
                  </NavLink>
                  {item.submenu?.length > 0 && <AnimatePresence></AnimatePresence>}
                </MobileNavItem>
              ))}
            </MobileNavList>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileHeader;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 16px;
  && svg {
    font-size: 20px;
  }
  &:hover {
    font-weight: bold;
  }
`;

const MobileMenuButton = styled.div`
  font-size: 24px;
  color: white;
  cursor: pointer;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 48px;
  left: 0;
  width: 100%;
  background: black;
  padding: 20px;
  z-index: 20;
  overflow: hidden;
`;

const MobileNavList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MobileNavItem = styled.li`
  margin-bottom: 15px;
`;
