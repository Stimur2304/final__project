import { Swiper, SwiperSlide } from 'swiper/react';
import { Comments__text } from '../../constants/comments__const';
import quote from "../pictures/left.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function SwiperSlider() {
  return (
    <div className='main-rates__div'>
      <div className='Rates'>
        <h1>Our valuable customer says</h1>
        <p>Reviews</p>

      </div>
        <div className='Swiper'>
          <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          >
            {Comments__text.map((item,idx)=>{
              return(
              <div className='main-comments__div' key={idx}>
                <SwiperSlide>
                  <div className='comments-card__div'>
                    <div className='comments-card__first'>
                    <img src={item.ava} className='ava-img' alt="" />
                     <div className='name__and__honor'>
                      <p className='rate-name'>{item.name}</p>
                      <p className='rate-job' >{item.job}</p>
                     </div>
                     <img src={quote} id="img"alt='' />
                    </div>
                    <div className='comment-card__desc'>
                      {item.desc}
                    </div>
                  </div>
                  <div className='comments-card__div'>
                    <div className='comments-card__first'>
                      <img src={item.ava2} className='ava-img' alt="" />
                        <div className='name__and__honor'>
                          <p className='rate-name'>{item.name2}</p>
                          <p className='rate-job' >{item.job2}</p>
                        </div>
                        <img src={quote} id="img" alt=''/>
                    </div>
                    <div className='comment-card__desc'>
                      {item.desc2}
                    </div>
                  </div>
                </SwiperSlide>
              </div>
              )
              })}
          </Swiper>
        </div>
    </div>
  );
}