'use client'

import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import { useState } from "react";

const page = () => {
  const [selectedImage, setSelectedImage] = useState('');

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
          "Created <b>Verbatim Voyage</b>  using Next.js and MongoDB, a full-stack side project blogging website inspired by Medium."
        ],
        image: [
          '/Verbatim_Voyage_01.png',
          '/Verbatim_Voyage_02.png',
          '/Verbatim_Voyage_03.png',
          '/Verbatim_Voyage_04.png',
        ]
      }
    },
    {
      title: 'November, 2024',
      content: {
        caption: [
          "Leading and Developing <b>Eventure</b> using Next.js and C# ASP.NET, an event management web application. Our client is CSOA (The office who handles events in the University of Makati)."
        ],
        image: [
          '/Eventure_01.png',
          '/Eventure_02.png',
          '/Eventure_03.png',
          '/Eventure_04.png',
        ]
      }
    },
    {
      title: 'October 22, 2024',
      content: {
        caption: [
          "Created <b>UMAK Blog</b> with a purpose of learning Next.js."
        ],
        image: [
          '/UMAK_Blog_01.png',
          '/UMAK_Blog_02.png',
        ]
      }
    },
    {
      title: 'October 16, 2024',
      content: {
        caption: [
          "Created <b>Pebble</b> and learned React-Vite, Express.js, MongoDB."
        ],
        image: [
          '/Pebble_01.png',
          '/Pebble_02.png',
        ]
      }
    },
    {
      title: 'Aug-Sept, 2024',
      content: {
        caption: [
          "Joined Hackathons and Learned to pitch and networking with other peers!"
        ],
        image: [
          '/BuildUp.png',
          '/Web3Hackathon.jpg',
        ]
      }
    },
    {
      title: 'May 17, 2024',
      content: {
        caption: [
          "Lead and Developed <b>Block 69 Cafe Website</b> as a final term project using PHP and MySQL with a team consisting of 5 members."
        ],
        image: [
          '/Block_69_Cafe_Website_01.png',
          '/Block_69_Cafe_Website_02.png',
          '/Block_69_Cafe_Website_03.png',
          '/Block_69_Cafe_Website_04.png',
        ]
      }
    },
    {
      title: '2021-2023',
      content: {
        caption: [
          "Lead and Developed Gym Reservation System (VB.Net), Galapon Inventory System (VB.Net), Bus Reservation System (C++)."
        ],
        image: [
          '/Gym_Reservation_System.JPG',
          '/Galapon_Inventory_System.JPG',
          '/Bus_Reservation_System.JPG',
        ]
      }
    }
  ];

  const certificates = [
    {
      image: '/6th_CCIS_Hackathon_2024.jpg'
    },
    {
      image: '/Meinard Edrei S. Santos - ICT Network E-Certificate - 2021_page-0001.jpg'
    },
    {
      image: '/Meinard Edrei S. Santos - ICT Network Certificate Day 2 - 2021_page-0001.jpg'
    },
    {
      image: '/Meinard Edrei S. Santos_ICTNetwork_Networking_Pt.3 - 2022_page-0001.jpg'
    },
    {
      image: '/Charting Our Future Certificate Participant MEINARD EDREI S. SANTOS - 2022_page-0001.jpg'
    },
  ];

  const closeModal = () => {
    setSelectedImage(null);
  }

  return (
    <div>
      <section className="flex justify-center items-center">
        <div className="bg-[var(--secondary-background)] shadow-xl border-[1px] border-white/15 md:w-[70%] w-[90%] h-full rounded-md"
          style={{
            animation: "slide-in .3s ease-out forwards, wobble .5s ease-in-out .3s"
          }}
        >
          <div className="flex justify-center items-center bg-[--primary] rounded-t-md p-2 text-sm text-[var(--text-inverted)]">portfolio~</div>
          <div className="flex flex-col p-5">
            <div className="flex flex-col">
              <Timeline
                data={data}
                setSelectedImage={setSelectedImage}
              />
            </div>
            <div className="w-full mt-[10vw] mb-[10vw] font-sans md:px-10">
              <div className="md:px-10">
                <div>
                  <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
                    My Certifications
                  </h2>
                  <p
                    className="text-sm md:text-base max-w-sm">
                    These are my industry-related certificates that I have obtained throughout my journey from Senior High School up to this date.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-[5vw]">
                  {certificates.map((item, index) => (
                    <div key={index} onClick={() => setSelectedImage(item.image)}>
                      <Image
                        src={item.image}
                        height={500}
                        width={500}
                        alt="Certificate photo"
                        className="shadow-xl rounded-md w-full h-full cursor-zoom-in"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal for viewing images */}
        {selectedImage && (
          <div className="fixed z-50 backdrop-blur-sm top-0 left-0 flex justify-center items-center w-full h-full" onClick={closeModal}>
            <Image
              src={selectedImage}
              height={500}
              width={500}
              alt="Viewed Image"
              className="rounded-md md:h-[50vw] md:w-[50vw] md:object-contain"
            />
          </div>
        )}
      </section>
    </div >
  );
}

export default page;
