import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import team1 from "../assets/man1.jpg";
import team2 from "../assets/man2.jpg";
import team3 from "../assets/man3.jpg";
import team4 from "../assets/man4.jpg";

const teamMembers = [
  { name: "Kimberly Hansen", role: "Senior Consultant", image: team1 },
  { name: "James Carter", role: "Senior Consultant", image: team2 },
  { name: "Emily Stone", role: "Senior Consultant", image: team3 },
  { name: "Daniel Craig", role: "Senior Consultant", image: team4 },
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        {/* Header */}
        <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
          <div>
            <p className="text-sm text-red-500 font-semibold mb-2">Meet Our Team</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Experience<br />Team Members
            </h2>
          </div>
          <a
            href="#"
            className="inline-block border border-black text-black px-5 py-2 rounded-full font-medium hover:bg-black hover:text-white transition"
          >
            Browse Services →
          </a>
        </div>

        {/* Swiper Carousel */}
        <div className="relative max-h-fit">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12" // adds space below carousel
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="text-center bg-gray-50 p-4 rounded-lg shadow-md mx-auto max-w-[340px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[350px] object-cover rounded-md"
                  />
                  <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Move pagination dots down */}
          <style>{`
            .swiper-pagination {
              bottom: -10px !important;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
