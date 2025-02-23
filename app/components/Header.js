'use client'
import { CiSettings } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { useEffect, useRef, useState } from 'react';
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, []);

  return (
    <div>
      <section className="flex md:justify-center md:p-16 mt-[5em] md:mt-0">
        <div className="md:flex hidden gap-5 text-xs">
          <Link href="/About">ABOUT ME (H)</Link>
          <Link href="/Portfolio">PORTFOLIO (J)</Link>
          <Link href="/Contact">CONTACT (L)</Link>
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
          <Link href="/About" className="text-sm">ABOUT ME (H)</Link>
          <Link href="/Portfolio" className="text-sm">PORTFOLIO (J)</Link>
          <Link href="/Contact" className="text-sm">CONTACT (L)</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
