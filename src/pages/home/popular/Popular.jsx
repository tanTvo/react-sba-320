import React, {useState} from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/UseFetch";
import Carousel from "../../../components/carousel/Carousel";


const Popular = () => {
    const [endpoint, setEndpoint] = useState("day")
    const{data, loading} = useFetch(`/${endpoint}/popular`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movie" ? "movie" : "tv");
     };
    return <div className="carouselSection">
        <ContentWrapper>
            <span className="carouselTitle">What's popular</span>
            <SwitchTabs data={["Movies", "TV shows"]} onTabChange={onTabChange}/>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading}/>
    </div>;

};



export default Popular;