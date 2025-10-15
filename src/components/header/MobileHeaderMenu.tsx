'use client';

import Link from 'next/link';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { AnimatePresence, motion } from 'framer-motion';
import { styled } from 'styled-components';
import { menuItems } from './HeaderData';

interface MobileHeaderMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const MobileHeaderMenu = ({ isOpen, onToggle }: MobileHeaderMenuProps) => {
  return (
    <>
      <MobileMenuButton onClick={onToggle}>{isOpen ? <CloseIcon /> : <MenuIcon />}</MobileMenuButton>

      {/* 사이드바 */}
      <AnimatePresence>
        {isOpen && (
          <>
            <Backdrop onClick={onToggle} />
            <Sidebar
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <SidebarHeader>
                <CloseButton onClick={onToggle}>
                  <CloseIcon />
                </CloseButton>
              </SidebarHeader>

              <SidebarContent>
                {menuItems?.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarNavLink href={item.href} onClick={onToggle}>
                      {item.label}
                    </SidebarNavLink>
                  </SidebarMenuItem>
                ))}
              </SidebarContent>
            </Sidebar>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileHeaderMenu;

const MobileMenuButton = styled.div`
  font-size: 24px;
  color: white;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Sidebar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100%;
  background: black;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px 20px;
  border-bottom: 1px solid #333;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 4px;

  &:hover {
    opacity: 0.7;
  }
`;

const SidebarContent = styled.div`
  flex: 1;
  padding: 20px 0;
`;

const SidebarMenuItem = styled.div`
  margin-bottom: 8px;
`;

const SidebarNavLink = styled(Link)`
  display: block;
  color: white;
  text-decoration: none;
  padding: 12px 24px;
  font-size: 16px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #333;
  }
`;
