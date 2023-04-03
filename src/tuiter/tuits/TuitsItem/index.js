import React from "react";
import TuitStats from "../TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../../services/tuits-thunks";

const TuitsItem = (
    {
        post = {
            "topic": "Space",
            "username": "SpaceX",
            "time": "2h",
            "tuit": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "spacex.jpeg"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return(
        <li className="list-group-item">
            <div>
                {
                    post.profile &&
                        <img src={`/images/${post.profile}`} width="50px" height="50px"
                             className="float-start rounded-circle" alt="post summary icon"/>
                }
                {
                    !post.profile &&
                    <img src={`/images/${post.image}`} width="50px" height="50px"
                         className="float-start rounded-circle" alt="post summary icon"/>
                }
                <div className="ms-5 ps-4">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(post._id)}/>
                    <div>
                        <b>{post.username} </b>
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