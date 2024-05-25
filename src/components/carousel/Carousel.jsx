import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
//import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";
//import CircleRating from "../circleRating/CircleRating";
//import Genres from "../genres/Genres";

import "./style.scss";

const Carousel = ({data, loading}) => {
    const carouselContainer = useRef();
    const {url} = useSelector((state) => state.home)
    const navigate = useNavigate();

    const navigation = (dir) => {

    }

    return <div className="carousel">
       <ContentWrapper>
        <BsFillArrowLeftCircleFill
            className="carouselLeftNav arrow"
            onClick={() => navigation("left")} 
        />
        <BsFillArrowRightCircleFill
        className="carouselRightNav arrow"
        onClick={() => navigation("right")} 
        />
             {!loading ? (
                    <div className="carouselItems" ref={carouselContainer}>
                        {data?.map((item) => {
                            const posterUrl = item.poster_path
                                ? url.poster + item.poster_path
                                : PosterFallback;
                            return(
                            <div 
                            key={item.id}
                            className="carouselItems">
                                
                                <div className="posterBlock">
                                    <Img src={posterUrl}/>
                                </div>
                                    <div className="textBlock">
                                        <span className="title">
                                            {item.title} || {item.name}
                                        </span>
                                    </div>
                            </div>
                        )
                    })}
                </div>
            ) : (
                <span>Loading . . .</span>
            )}
       </ContentWrapper>

        
        </div>
};

export default Carousel;