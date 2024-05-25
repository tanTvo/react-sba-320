import React from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

ContentWrapper
SwitchTabs

const Trending = () => {
    return <div className="carouselSection">
        <ContentWrapper>
            <span className="carouselTitle">Trending</span>
            <SwitchTabs data={["Day", "Week"]}/>
        </ContentWrapper>
    </div>;

};



export default Trending;