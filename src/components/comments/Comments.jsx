import './comments.scss';
import userAvatar from '../../assets/images/placeholder.png';
import StarIcon from '@mui/icons-material/Star';
import food_1 from '../../assets/images/food--1.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import 'swiper/css/navigation';
import 'swiper/css';
import { useRef } from 'react';
function Comments() {
    const swiperRef = useRef();
    return (
        <div className='comments'>
            <div className="header">
                <div className="title">
                    <h6>نظرات مشتریان</h6>
                    <span>نظرات مشتریان نسبت به منو</span>
                </div>
                <div className="sliderButtons">
                <button onClick={() => swiperRef.current?.slidePrev()}>
                        <ArrowForwardIosIcon style={{ fontSize: 14,color: '#00B074' }} />
                    </button>
                    <button onClick={() => swiperRef.current?.slideNext()}>
                        <ArrowBackIosIcon style={{ fontSize: 14,color: '#00B074' }} />
                    </button>
                    
                </div>
            </div>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                  }}
            >
                <SwiperSlide>
                    <div className="commentCard">
                        <div className="content">
                            <div className="user">
                                <img src={userAvatar} alt="" />
                                <div className="user__info">
                                    <h4>فراز توانا</h4>
                                    <span>2 روز قبل</span>
                                </div>
                            </div>
                            <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                            </p>
                            <div className="rate">
                                <div className="stars">
                                    <StarIcon style={{ fontSize: 14, color: '#F7C604' }} />
                                    <StarIcon style={{ fontSize: 14, color: '#F7C604' }} />
                                    <StarIcon style={{ fontSize: 14, color: '#F7C604' }} />
                                    <StarIcon style={{ fontSize: 14, color: '#F7C604' }} />
                                    <StarIcon style={{ fontSize: 14, color: '#B9BBBD' }} />
                                </div>
                                <span>4.5</span>
                            </div>
                        </div>
                        <div className="thumbnail">
                            <img src={food_1} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="commentCard">
                        <div className="content">
                            <div className="user">
                                <img src={userAvatar} alt="" />
                                <div className="user__info">
                                    <h4>فراز توانا</h4>
                                    <span>2 روز قبل</span>
                                </div>
                            </div>
                            <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                            </p>
                            <div className="rate">
                                <div className="stars">
                                    <StarIcon style={{ fontSize: 14, color: '#F7C604' }} />
                                    <StarIcon style={{ fontSize: 14, color: '#F7C604' }} />
                                    <StarIcon style={{ fontSize: 14, color: '#F7C604' }} />
                                    <StarIcon style={{ fontSize: 14, color: '#F7C604' }} />
                                    <StarIcon style={{ fontSize: 14, color: '#B9BBBD' }} />
                                </div>
                                <span>4.5</span>
                            </div>
                        </div>
                        <div className="thumbnail">
                            <img src={food_1} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="commentCard">
                        <div className="content">
                            <div className="user">
                                <img src={userAvatar} alt="" />
                                <div className="user__info">
                                    <h4>فراز توانا</h4>
                                    <span>2 روز قبل</span>
                                </div>
                            </div>
                            <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                            </p>
                            <div className="rate">
                                <div className="stars">
                                    <StarIcon style={{ fontSize: 14, color: '#F7C604' }} />
                                    <StarIcon style={{ fontSize: 14, color: '#F7C604' }} />
                                    <StarIcon style={{ fontSize: 14, color: '#F7C604' }} />
                                    <StarIcon style={{ fontSize: 14, color: '#F7C604' }} />
                                    <StarIcon style={{ fontSize: 14, color: '#B9BBBD' }} />
                                </div>
                                <span>4.5</span>
                            </div>
                        </div>
                        <div className="thumbnail">
                            <img src={food_1} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="commentCard">
                        <div className="content">
                            <div className="user">
                                <img src={userAvatar} alt="" />
                                <div className="user__info">
                                    <h4>فراز توانا</h4>
                                    <span>2 روز قبل</span>
                                </div>
                            </div>
                            <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                            </p>
                            <div className="rate">
                                <div className="stars">
                                    <StarIcon style={{ fontSize: 14, color: '#F7C604' }} />
                                    <StarIcon style={{ fontSize: 14, color: '#F7C604' }} />
                                    <StarIcon style={{ fontSize: 14, color: '#F7C604' }} />
                                    <StarIcon style={{ fontSize: 14, color: '#F7C604' }} />
                                    <StarIcon style={{ fontSize: 14, color: '#B9BBBD' }} />
                                </div>
                                <span>4.5</span>
                            </div>
                        </div>
                        <div className="thumbnail">
                            <img src={food_1} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="commentCard">
                        <div className="content">
                            <div className="user">
                                <img src={userAvatar} alt="" />
                                <div className="user__info">
                                    <h4>فراز توانا</h4>
                                    <span>2 روز قبل</span>
                                </div>
                            </div>
                            <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                            </p>
                            <div className="rate">
                                <div className="stars">
                                    <StarIcon style={{ fontSize: 14, color: '#F7C604' }} />
                                    <StarIcon style={{ fontSize: 14, color: '#F7C604' }} />
                                    <StarIcon style={{ fontSize: 14, color: '#F7C604' }} />
                                    <StarIcon style={{ fontSize: 14, color: '#F7C604' }} />
                                    <StarIcon style={{ fontSize: 14, color: '#B9BBBD' }} />
                                </div>
                                <span>4.5</span>
                            </div>
                        </div>
                        <div className="thumbnail">
                            <img src={food_1} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Comments