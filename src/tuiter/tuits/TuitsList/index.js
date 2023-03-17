import React from "react";
import {useSelector} from "react-redux";
import TuitsItem from "../TuitsItem";

const TuitsList = () => {
    const tuitsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {
                tuitsArray.map(tuit =>
                    <TuitsItem
                        key={tuit._id} post={tuit}/>)
            }
        </ul>
    );
};
export default TuitsList;