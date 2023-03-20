import React from "react";
import {useDispatch} from "react-redux";
import {likeTuit} from "../../reducers/tuits-reducer";


const TuitStats = ({
    info = {replies: 0, retuits: 0, likes: 0, liked: false}
                   }) => {
    const dispatch = useDispatch();
    const updateLike = () => {
        dispatch(likeTuit(info))
    }
    return(
        <div className="row mt-3">
            <div className="col-3">
                    <div className="justify-content-start">
                        <i className="bi bi-chat"/>
                        {info.replies === 0 ? '' : `    ${info.replies}`}
                    </div>
            </div>
            <div className="col-3">
                    <i className="bi bi-arrow-repeat"/>
                    {info.retuits === 0 ? '' : `    ${info.retuits}`}
            </div>
            <div className="col-3">
                <div className="d-inline" onClick={updateLike}>
                    {
                        info.liked && <i className="bi bi-heart-fill text-danger"/>
                    }
                    {
                        !info.liked &&  <i className="bi bi-heart"/>
                    }
                    {info.likes === 0 ? '' : `    ${info.likes}`}
                </div>
            </div>
            <div className="col-3">
                    <i className="bi bi-share"/>
            </div>
        </div>
    );
};
export default TuitStats;