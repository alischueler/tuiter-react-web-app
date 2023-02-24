import React from "react";
import {useSelector} from "react-redux";
import TuitsItem from "../TuitsItem";

const TuitsList = () => {
    const postsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <TuitsItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default TuitsList;