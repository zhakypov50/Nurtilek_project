import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {articlesSelect, getArticles, loadArticlesSelect} from "../../redux/slices/slices";
import {NavLink} from "react-router-dom";
import styles from "./css/slider.module.css"
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import {CircularProgress} from "@mui/material";
import {Autoplay, Navigation, Pagination} from "swiper";

export default function Slider() {
    const articles = useSelector(articlesSelect)
    const load = useSelector(loadArticlesSelect)
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(getArticles())
    }, [dispatch])
    return (
        <div className={styles.all}>
            {
                !load
                    ?
                    <Swiper
                    className={styles.typof}
                        autoplay={{delay: 2000, disableOnInteraction:false}}
                        spaceBetween={30}
                        slidesPerView={3}
                        navigation
                        pagination={{clickable: true}}
                        scrollbar={{draggable: true}}
                        modules={[Navigation, Autoplay, Pagination]}
                    >
                        {
                            articles.slice(0,10).map(i =>(
                                <SwiperSlide key={i.id} className={styles.slide}>
                                    <NavLink className={styles.ajax} to={`/posts/${i.id}`}>
                                        <div>
                                            <img style={{
                                                objectFit: 'contain'
                                            }} src={i?.image} alt="" className={styles.photo}/>
                                        </div>
                                        <p className={styles.rec}>{i?.title}</p>
                                    </NavLink>
                                </SwiperSlide>
                            ))
            }
            </Swiper>
                    :
                    <div>
                        <CircularProgress/>
                    </div>
            }
        </div>
    )
}
