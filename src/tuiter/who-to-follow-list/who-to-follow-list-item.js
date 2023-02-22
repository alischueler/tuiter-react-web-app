import React from "react";
import "./who-to-follow-list-item.css"
const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.webp' }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="d-flex justify-content-between">
                <img src={`/images/${who.avatarIcon}`} height={48} width={48} className="rounded-circle align-self-center"
                alt="who to follow icon"/>
                <div className="ps-xxl-3 ps-xl-2 ps-l-1">
                    <b>{who.userName}</b>
                    <i className="fas fa-check-circle"/><br/>
                    @{who.handle}
                </div>
                <button type="button"
                        className="btn btn-primary rounded-pill wd-height align-self-center ms-auto p-2">Follow
                </button>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;