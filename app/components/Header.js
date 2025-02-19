'use client'
import { IoIosMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { useState } from 'react';
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <section>
        <div className="md:hidden flex place-self-end">
          <button onClick={() => setMenuOpen(true)} className={menuOpen ? `hidden` : ``}><IoIosMenu className="text-6xl" /></button>
        </div>
      </section>
      <div className={`fixed top-0 right-0 z-10 flex flex-col bg-[var(--background)] h-screen p-16 gap-10 
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
