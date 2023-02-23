import React from "react";

const TuitStats = (
    {info = {comments: 0, rettuit: 0, like: 0}}
) => {
    return(
        <div className="row">
            <div className="col-3">
                <i className="bi bi-chat"/>
                {info.comments === 0 ? '' : info.comments}
            </div>
            <div className="col-3">
                <i className="bi bi-arrow-repeat"/>
                {info.rettuit === 0 ? '' : info.rettuit}
            </div>
            <div className="col-3">
                <i className="bi bi-heart"/>
                {info.like === 0 ? '' : info.like}
            </div>
            <div className="col-3">
                <i className="bi bi-share"/>
            </div>
        </div>
    );
};
export TuitStats;