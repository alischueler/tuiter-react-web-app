const PostSummaryListItem = (post) => {
    return(`
        <div class="ps-3 pt-2 pb-2 border border-bottom-0 d-flex justify-content-between">
        <div class="float-start me-sm-4 me-lg-2 me-xl-1">
            <div class="text-secondary">
                ${post.topic ? post.topic : ''}
            </div>
            <div>
                <b>${post.userName}</b>
                <i class="fas fa-check-circle"></i>
                <span class="text-secondary"> ${post.time ? `- ${post.time}` : ''}</span>
            </div>
            <div>
                <b>${post.title ? post.title : ''}</b>
            </div>
            <div class="text-secondary">
                ${post.tweets ? `${post.tweets} Tweets` : ''}
            </div>
        </div>
        <img src=${post.image} width="87px" height="87px"
        class="float-end me-3 rounded-3"/>
    </div>
    `)
}
export default PostSummaryListItem