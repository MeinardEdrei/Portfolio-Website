'use client'
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('light');
  const [showGuide, setShowGuide] = useState(true);
  const menuRef = useRef();
  const guideRef = useRef();
  const router = useRouter();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';

    if (savedTheme === 'dark') {
      setCurrentTheme('dark');
      document.body.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      setCurrentTheme('light');
      document.body.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);

    if (newTheme === 'dark') {
      document.body.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.body.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
      if (guideRef.current && !guideRef.current.contains(event.target)) {
        setShowGuide(false);
      }
    };

    const handleKeybinds = (event) => {
      switch (event.key.toLowerCase()) {
        case 'h':
          router.push('/About');
          break;
        case 'j':
          router.push('/Portfolio');
          break;
        case 'l':
          router.push('/Contact');
          break;
        case 'x':
          router.push('/');
          break;
        default:
          break;
      }
    };

    window.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeybinds);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeybinds);
    };
  }, []);

  return (
    <div>
      {/* Navigation Guide */}
      <div className="fixed bottom-20 right-5 flex flex-col-reverse items-end gap-2 z-50">
        <div ref={guideRef} className={`hidden md:block bg-gray-800 text-white px-4 py-2 rounded-lg text-xs z-50 shadow-lg transition transform duration-300 ease-in-out 
        ${showGuide ? `translate-x-0` : `translate-x-96`}`}>
          Use <span className="font-bold">H</span>, <span className="font-bold">J</span>, <span className="font-bold">L</span> to navigate. Press <span className="font-bold">X</span> to exit.
        </div>
        <div ref={guideRef} className={`hidden md:block bg-gray-800 text-white px-4 py-2 rounded-lg text-xs z-50 shadow-lg transition transform duration-300 ease-in-out 
        ${showGuide ? `translate-x-0` : `translate-x-96`}`}>
          Use <span className="font-bold">SPACE</span> to scroll down, <span className="font-bold">SHIFT SPACE</span> to scroll up.
        </div>
      </div>

      <section className="flex md:justify-center md:p-16 mt-[5em] md:mt-0">
        <div className="md:flex hidden gap-5 text-xs">
          <Link href="/About">ABOUT ME (H)</Link>
          <Link href="/Portfolio">PORTFOLIO (J)</Link>
          <Link href="/Contact">CONTACT (L)</Link>
          <Link href="/">EXIT (X)</Link>
        </div>
        <div className="fixed top-10 border-[1px] right-5 rounded-md bg-[var(--background)] opacity-60 md:hidden flex place-self-end">
          <button onClick={() => setMenuOpen(true)} className={menuOpen ? `hidden` : ``}><CiSettings className="text-3xl" /></button>
        </div >
      </section >

      {/* Sidebar Menu */}
      < div ref={menuRef} className={`fixed top-0 right-0 z-10 flex flex-col bg-[var(--background)] h-screen p-16 gap-10 
          transition transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}>
        <div>
          <button onClick={() => setMenuOpen(false)}>
            <IoIosClose className="text-4xl" />
          </button>
        </div>
        <div className="flex flex-col gap-7">
          <Link href="/About" className="text-sm" onClick={() => setMenuOpen(false)}>ABOUT ME (H)</Link>
          <Link href="/Portfolio" className="text-sm" onClick={() => setMenuOpen(false)}>PORTFOLIO (J)</Link>
          <Link href="/Contact" className="text-sm" onClick={() => setMenuOpen(false)}>CONTACT (L)</Link>
        </div>
      </div >

      {/* Theme Toggle Button */}
      < button
        onClick={toggleTheme}
        className="fixed bottom-5 right-5 bg-neutral-800 dark:bg-neutral-200 text-white dark:text-black text-xl md:text-2xl rounded-full border-2 dark:border-neutral-700 p-2 z-50"
      >
        {currentTheme === 'light' ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
      </button >
    </div >
  );
}

export default Header;
