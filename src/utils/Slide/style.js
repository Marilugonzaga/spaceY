import styled from 'styled-components'

export const Container = styled.div`
  width: 500px;

  .swiper-wrapper {
    display: flex;
  }

  .swiper-slide {
    border-radius: 10px;
    
  }

  img {
    width: 100%;
  }

  .mySwiper{
   /* background-color: #fff; */
   padding: 0 50px;

   .swiper-button-prev{
    color: var(--mars-light)
   }

   .swiper-button-next{
    color: var(--mars-light)
   }

   .swiper-pagination-bullet-active{
    background-color: var(--mars-light);
   }
  }
`
