import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./ClientBrand.css";

import google from "../assets/google.svg";
import microsoft from "../assets/microsoft.svg";
import amazon from "../assets/amazon.svg";
import oracle from "../assets/oracle.svg";
import ibm from "../assets/ibm.svg";
import netflix from "../assets/netflix.svg";

function ClientBrand() {
  const clients = [
    { name: "Google", logo: google },
    { name: "Microsoft", logo: microsoft },
    { name: "Amazon", logo: amazon },
    { name: "Oracle", logo: oracle },
    { name: "IBM", logo: ibm },
    { name: "Netflix", logo: netflix },
  ];

  return (
    <section className="clients-section container">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 2 },
          576: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          992: { slidesPerView: 5 },
        }}
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="client-item">
              <img src={client.logo} alt={client.name} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ClientBrand;