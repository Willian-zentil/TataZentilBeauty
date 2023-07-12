import React from 'react'
import RatingBox from './RatingBox/RatingBox';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper"
import 'swiper/css'

import styles from './Rating.module.css'

const LIST_COMMENTS = [
  {
    id: 1,
    name: "Ariany Mendonça",
    stars: 5,
    comment: "Maravilhosa e super atenciosa. Fora que trabalha muito bem deixando do jeitinho que as clientes querem",
  },
  {
    id: 2,
    name: "Carol Maia",
    stars: 5,
    comment: "Esses cílios que continuam maravilhosos com sol, mar e cloro. Ela é perfeita!",
  },
  {
    id: 3,
    name: "Giovana Marina",
    stars: 5,
    comment: "A mãe acorda sempre pronta com os cílios da Tata, isso não tem preço.",
  },
];

function RatingClients() {
  return (
    <section className={styles.containerBlackground}>
      <div className={styles.containerRating}>
        <Swiper
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 5000
          }}
          breakpoints={{
            "300": {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            "640": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay]}
        >
          {LIST_COMMENTS.map((item, index) => <SwiperSlide key={index}><RatingBox key={item.id} item={item} /></SwiperSlide>)}
        </Swiper>
      </div>
    </section>
  )
}

export default RatingClients