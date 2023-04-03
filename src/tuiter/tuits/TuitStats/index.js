import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../../services/tuits-thunks";


const TuitStats = ({
    info = {replies: 0, retuits: 0, likes: 0, liked: false, dislikes: 0, disliked: false}
                   }) => {
    const dispatch = useDispatch();
    let likes = info.likes;
    let liked = info.liked;
    let dislikes = !info.dislikes ? 0 : info.dislikes;
    let disliked = info.disliked;
    return(
        <div className="row mt-3">
            <div className="col-2">
                    <div className="justify-content-start">
                        <i className="bi bi-chat"/>
                        {info.replies ? (info.replies === 0 ? '' : `    ${info.replies}`) : ''}
                    </div>
            </div>
            <div className="col-2">
                    <i className="bi bi-arrow-repeat"/>
                    {info.retuits ? (info.retuits === 0 ? '' : `    ${info.retuits}`) : ''}
            </div>
            <div className="col-3">
                <div className="d-inline" onClick={() => {
                    if (liked) {
                        likes -= 1;
                    } else {
                        likes += 1;
                    }
                    liked = !liked;
                    dispatch(updateTuitThunk({
                        ...info,
                        likes,
                        liked
                }))}}>
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
                <div className="d-inline" onClick={() => {
                    if (disliked) {
                        dislikes -= 1;
                    } else {
                        dislikes += 1;
                    }
                    disliked = !disliked;
                    dispatch(updateTuitThunk({
                        ...info,
                        dislikes,
                        disliked
                    }))}}>
                    {
                        info.disliked && <i className="bi bi-hand-thumbs-down-fill text-primary"/>
                    }
                    {
                        !info.disliked &&  <i className="bi bi-hand-thumbs-down"/>
                    }
                    {info.dislikes ? (info.dislikes === 0 ? '' : `    ${info.dislikes}`) : ''}
                </div>
            </div>
            <div className="col-2">
                    <i className="bi bi-share"/>
            </div>
        </div>
    );
};
export default TuitStats;