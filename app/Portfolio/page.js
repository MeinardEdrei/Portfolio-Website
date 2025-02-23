'use client'

import { Timeline } from "@/components/ui/timeline";
import Link from "next/link";

const page = () => {
  const data = [
    {
      title: 'February, 2025',
      content: {
        caption: [
          "Became a founder of UMak Dev Space, the first community of developers of the university.",
          "Switched to Arch Linux and learned Vim"
        ],
        image: [
          '/Dev_Space.png',
        ]
      },
    },
    {
      title: 'January, 2025',
      content: {
        caption: [
          "Created Verbatim Voyage, a full-stack side project blogging website inspired by Medium."
        ],
        image: [
          '/Verbatim_Voyage_01.png',
          '/Verbatim_Voyage_02.png',
          '/Verbatim_Voyage_03.png',
          '/Verbatim_Voyage_04.png',
        ]
      }
    },
  ];

  return (
    <div>
      <section className="flex justify-center items-center">
        <div className="bg-[var(--secondary-background)] md:w-[70%] w-[90%] h-full rounded-md">
          <div className="flex justify-center items-center bg-[--primary] p-2 text-sm text-[var(--text-inverted)]">portfolio~</div>
          <div className="flex flex-col p-5">
            <div className="flex flex-col">
              <Timeline
                data={data}
              />
            </div>
          </div>
        </div>
      </section>
    </div >
  );
}

export default page;
