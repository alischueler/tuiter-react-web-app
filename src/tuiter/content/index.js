import React from "react";
import NavigationSidebar from "../navigation-sidebar";
import Home from "../home";
import ExploreComponent from "../explore";
import WhoToFollowList from "../who-to-follow-list";

function TuiterContent({tab}) {
    return (
        <div>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active={tab}/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                     style={{"position": "relative"}}>
                    {tab === "home" ? <Home/> : <ExploreComponent/>}
                </div>
                <div className="d-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </div>
    );
}

export default TuiterContent