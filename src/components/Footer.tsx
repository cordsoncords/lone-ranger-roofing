import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h5 className="text-white font-bold text-lg mb-2">Lone Ranger Roofing</h5>
            <p className="text-sm">Trusted Roofing & Siding Solutions</p>
          </div>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Licensing</a>
          </div>

          <div className="text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Lone Ranger Roofing.</p>
            <p className="text-xs mt-1">All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};