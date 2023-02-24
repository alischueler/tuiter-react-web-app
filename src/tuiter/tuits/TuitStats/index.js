import React from "react";

const TuitStats = ({
    info = {comment: 0, retuit: 0, like: 0}
                   }) => {
    return(
        <div className="row">
            <div className="col-3">
                <i className="bi bi-chat"></i>
                {info.comment === 0 ? '' : info.comment}
            </div>
            <div className="col-3">
                <i className="bi bi-arrow-repeat"></i>
                {info.retuit === 0 ? '' : info.retuit}
            </div>
            <div className="col-3">
                <i className="bi bi-heart"></i>
                {info.like === 0 ? '' : info.like}
            </div>
            <div className="col-3">
                <i className="bi bi-share"></i>
            </div>
        </div>
    );
};
export default TuitStats;