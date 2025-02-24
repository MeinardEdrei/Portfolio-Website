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
  const [currentTheme, setCurrentTheme] = useState('dark');
  const menuRef = useRef();
  const router = useRouter();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';

    if (savedTheme === 'light') {
      setCurrentTheme('light');
      document.body.classList.add('light-theme');
      document.documentElement.classList.remove('dark');
    } else {
      setCurrentTheme('dark');
      document.body.classList.remove('light-theme');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);

    if (newTheme === 'light') {
      document.body.classList.add('light-theme');
      document.documentElement.classList.remove('dark');
    } else {
      document.body.classList.remove('light-theme');
      document.documentElement.classList.add('dark');
    }
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

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
    }

    window.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeybinds);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeybinds);
    }
  }, []);

  return (
    <div>
      <section className="flex md:justify-center md:p-16 mt-[5em] md:mt-0">
        <div className="md:flex hidden gap-5 text-xs">
          <Link href="/About">ABOUT ME (H)</Link>
          <Link href="/Portfolio">PORTFOLIO (J)</Link>
          <Link href="/Contact">CONTACT (L)</Link>
          <Link href="/">EXIT (X)</Link>
        </div>
        <div className="fixed top-10 border-[1px] right-5 rounded-md bg-[var(--background)] opacity-60 md:hidden flex place-self-end">
          <button onClick={() => setMenuOpen(true)} className={menuOpen ? `hidden` : ``}><CiSettings className="text-3xl" /></button>
        </div>
      </section>
      <div ref={menuRef} className={`fixed top-0 right-0 z-10 flex flex-col bg-[var(--background)] h-screen p-16 gap-10 
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
      </div>
      <button
        onClick={toggleTheme}
        className="fixed bottom-5 right-5 bg-[var(--background)] text-xl md:text-2xl rounded-full border-2 border-opacity-5 p-2 z-50"
      >
        {currentTheme === 'light' ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
      </button>
    </div>
  );
}

export default Header;
