import React, { useEffect, useState } from 'react';

export const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Show header only when at the very top (within 50px)
      // Hide completely otherwise
      setIsVisible(window.scrollY < 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out transform ${
        isVisible 
          ? 'translate-y-0 opacity-100 py-6' 
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-center items-center">
        {/* Logo Area - Centered */}
        <div className="flex items-center justify-center">
             <img 
               src="/logo.webp" 
               alt="Lone Ranger Roofing" 
               // Increased sizes significantly: Mobile h-36 (9rem), Desktop h-52 (13rem)
               className="w-auto object-contain h-36 sm:h-52 drop-shadow-xl" 
             /> 
        </div>
      </div>
    </header>
  );
};