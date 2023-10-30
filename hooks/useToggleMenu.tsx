import { useRef, useState, useEffect, useCallback } from 'react';

type ReturnType = {
  menuRef: React.RefObject<HTMLDivElement>;
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

export function useToggleMenu(): ReturnType {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        toggleMenu();
      }
    },
    [isMenuOpen, toggleMenu],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return { menuRef, isMenuOpen, toggleMenu };
}
