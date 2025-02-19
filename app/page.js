import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <section className="flex justify-center items-center h-screen w-full">
        <div className="xl:w-[40%] w-[70%] flex flex-col gap-3">
          <h1 className="xl:text-xl text-(var(--text-color))">
            Hi, I’m <b>Meinard Edrei</b>—a passionate developer building innovative solutions and exploring emerging technologies to turn ideas into reality.
          </h1>
          <Link
            className="xl:text-sm text-xs text-[var(--secondary)]"
            href="/Home">
            Go to next page (L)
          </Link>
        </div>
      </section>
    </div>
  );
}
