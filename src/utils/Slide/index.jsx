import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

import Carrosel1 from '../../assets/carrosel01.svg'
import Carrosel2 from '../../assets/carrosel02.svg'
import Carrosel3 from '../../assets/carrosel03.svg'

import { Container } from './style'

function Slider() {
  return (
    <Container>
      <Swiper
        slidesPerView={1}
        spaceBetween={55}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Carrosel1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Carrosel2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Carrosel3} alt="" />
        </SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default Slider
