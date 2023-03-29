import React from "react";
import {Link} from "react-router-dom";
import "./index.css";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div>
            <div className="list-group">
                <Link className="list-group-item" to="">
                    <i className="bi bi-twitter"/>
                </Link>
                <Link className={`list-group-item
                        ${active === 'home'?'active':''}`} to="/tuiter">
                    <i className="bi bi-house-door-fill"/>
                    <span className="d-none d-xl-inline"> Home</span>
                </Link>
                <Link className={`list-group-item
                        ${active === 'explore'?'active':''}`} to="explore">
                    <i className="bi bi-hash"/>
                    <span className="d-none d-xl-inline"> Explore</span>
                </Link>
                <Link className={`list-group-item
                        ${active === 'notifications'?'active':''}`} to="#">
                    <i className="bi bi-bell-fill"/>
                    <span className="d-none d-xl-inline"> Notifications</span>
                </Link>
                <Link className={`list-group-item
                        ${active === 'messages'?'active':''}`} to="#">
                    <i className="bi bi-envelope-fill"/>
                    <span className="d-none d-xl-inline"> Messages</span>
                </Link>
                <Link className={`list-group-item
                        ${active === 'bookmarks'?'active':''}`} to="#">
                    <i className="bi bi-bookmark-fill"/>
                    <span className="d-none d-xl-inline"> Bookmarks</span>
                </Link>
                <Link className={`list-group-item
                        ${active === 'lists'?'active':''}`} to="#">
                    <i className="bi bi-list-ul"/>
                    <span className="d-none d-xl-inline"> Lists</span>
                </Link>
                <Link className={`list-group-item
                        ${active === 'profile'?'active':''}`} to="#">
                    <i className="bi bi-person-fill"/>
                    <span className="d-none d-xl-inline"> Profile</span>
                </Link>
                <Link className={`list-group-item
                        ${active === 'more'?'active':''}`} to="#">
                    <i className="bi bi-plus-circle-fill"/>
                    <span className="d-none d-xl-inline"> More</span>
                </Link>
            </div>
            <div className="mt-2">
                <button type="button" className="btn btn-primary rounded-pill wd-100">Tuit</button>
            </div>
        </div>
    );
};
export default NavigationSidebar;