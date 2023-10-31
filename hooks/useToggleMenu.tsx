import { useRef, useEffect, useCallback } from 'react';
import { useCycle } from 'framer-motion';

type ReturnType = {
  menuRef: React.RefObject<HTMLDivElement>;
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

export function useToggleMenu(): ReturnType {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isMenuOpen, toggleMenu] = useCycle(false, true);

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
