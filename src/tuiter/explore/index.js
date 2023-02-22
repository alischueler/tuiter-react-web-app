import React from "react";
import {Link} from "react-router-dom";
import PostSummaryList from "../post-summary-list";
import "./index.css";
const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <div className="col-11">
                    <i id="searchIcon" className="bi bi-search"/>
                    <input id="search" placeholder="Search Tuiter" className="rounded-pill form-control"/>
                </div>
                <div className="col-1">
                    <i className="bi bi-gear-fill fs-2 text-primary wd-bottom-4 position-relative float-end"/>
                </div>
            </div>
            <ul className="nav nav-pills mb-2">
                <li className="nav-item">
                    <Link className="nav-link active" to="#">For You</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Trending</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">News</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Sports</Link>
                </li>
                <li className="nav-item d-none d-md-inline">
                    <Link className="nav-link" to="#">Entertainment</Link>
                </li>
            </ul>
            <div className="position-relative mt-2">
                <img src="/images/spaceship.webp" width="100%" alt="spaceship"/>
                <h2 className="position-absolute text-white bottom-0 start-0 ms-2"><b>SpaceX's Starship</b></h2>
            </div>
            <PostSummaryList/>
        </>
    );
};
export default ExploreComponent;