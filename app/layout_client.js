'use client';

import { usePathname } from "next/navigation";
import Header from "./components/Header";

export default function Layout_Client({ children }) {
  const pathname = usePathname();
  return (
    <div>
      {pathname !== '/' && <Header />}
      <main>
        {children}
      </main>
    </div>
  )
}
