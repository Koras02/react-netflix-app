import React, {useEffect, useState} from 'react';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import axios from "axios";
import { img_300,noPicture } from '../config/config';
import './Carousel.css';
import { api_key } from '../../../../Url/urls';
 

 
const handleDragStart = (e) => e.preventDefault();

const Carousel = ({id, media_type}) => {
     const [credits, setCredits] = useState([]);
     const items = credits?.map((c) => (
         <div className="carousel__item">
             <img src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
               alt={c?.name}
               className={'carousel__item_img'}
               onDragStart={handleDragStart}
          />
          <b className={"carousel__item_text"}>{c?.name}</b>
         </div>
     ))

     const responsive = {
         0: {
             items: 3,
         },
         512: {
             items: 5,
         },
         1024: {
             items: 7,
         },

     };

     // eslint-disable-next-line react-hooks/exhaustive-deps
     function getCredits() {
         axios({
             method: "GET",
             url: `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${api_key}&language=ko-KR`
         }).then(response => {
             setCredits(response.data.cast ?? []);
         })
     }

     useEffect(() => {
         getCredits();
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])


    return (
        <AliceCarousel 
          mouseTracking
          fadeOutAnimation={true}
          activeIndex={-2}
          items={items}
          autoWidth={true}
          animationDuration={2000}
          disableButtonsControls
          disableDotsControls
          animationType={"fadeout"}
          responsive={responsive}
        />
    )
}

export default Carousel
