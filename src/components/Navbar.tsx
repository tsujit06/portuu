import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full bg-gradient-to-r from-gray-950 to-gray-900 dark:from-black dark:to-gray-950 bg-opacity-95 backdrop-blur-lg z-50 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <span className="text-white text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            SUJITH L B
          </span>
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200"
              >
                About
              </button>
              
              <button
                onClick={() => scrollToSection('education')}
                className="text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200"
              >
                Education
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200"
              >
                Contact
              </button>
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-800 dark:bg-gray-700 text-yellow-400 dark:text-blue-400 hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}