import React from "react";
const TuitsItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.jpeg"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="d-flex justify-content-between">
                <div className="float-start me-sm-4 me-lg-2 me-xl-2 me-xxl-3">
                    <div className="text-secondary">
                        {post.topic ? post.topic : ''}
                    </div>
                    <div>
                        <b>{post.userName} </b>
                        <i className="bi bi-patch-check-fill"/>
                        <span className="text-secondary"> {post.time ? `- ${post.time}` : ''}</span>
                    </div>
                    <div>
                        <b>{post.title ? post.title : ''}</b>
                    </div>
                    <div className="text-secondary">
                        {post.tweets ? `${post.tweets} Tweets` : ''}
                    </div>
                </div>
                <img src={`/images/${post.image}`} width="87px" height="87px"
                     className="float-end rounded-3" alt="post summary icon"/>
            </div>
        </li>
    );
};
export default TuitsItem;