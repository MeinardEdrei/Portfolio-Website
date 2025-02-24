'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const handleKeybinds = (event) => {
      if (event.key.toLowerCase() === 'l') {
        router.push('/About');
      }
    }

    window.addEventListener('keydown', handleKeybinds);
    return () => {
      window.removeEventListener('keydown', handleKeybinds);
    }
  }, []);

  return (
    <div className="h-screen w-full">
      <section className="flex justify-center items-center h-full w-full">
        <div className="xl:w-[40%] w-[70%] flex flex-col gap-3">
          <h1 className="md:text-base text-sm text-(var(--text-color))">
            Hi, I&apos;m <b>Meinard Edrei</b>—a passionate developer building innovative solutions and exploring emerging technologies to turn ideas into reality.
          </h1>
          <Link
            className="xl:text-sm text-xs text-[var(--secondary)]"
            href="/About">
            Go to next page (L)
          </Link>
        </div>
      </section>
    </div>
  );
}
