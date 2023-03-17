import React from "react";
import TuitStats from "../TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../../reducers/tuits-reducer";

const TuitsItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "tuit": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "spacex.jpeg"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return(
        <li className="list-group-item">
            <div>
                <img src={`/images/${post.image}`} width="50px" height="50px"
                     className="float-start rounded-circle" alt="post summary icon"/>
                <div className="ms-5 ps-4">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(post._id)}/>
                    <div>
                        <b>{post.userName} </b>
                        <i className="bi bi-patch-check-fill text-primary"/>
                        <span> {post.handle} {post.time ? `• ${post.time}` : ''}</span>
                    </div>
                    <div>
                        {post.tuit}
                    </div>
                    <TuitStats info={post}/>
                </div>
            </div>
        </li>
    );
};
export default TuitsItem;