const WhoToFollowListItem = (who) => {
    return (`
        <div class="ps-3 pb-2 pt-2 border-0 border-bottom d-flex pe-3 justify-content-between">
        <img src=${who.avatarIcon} width="35px" height="38px" class="rounded-circle align-self-center"/>
        <div class="ps-xl-3 ps-l-1">
            <b>${who.userName}</b>
            <i class="fas fa-check-circle"></i><br/>
            @${who.handle}
        </div>
        <button type="button" class="btn btn-primary rounded-pill wd-height align-self-center ms-auto p-2">Follow</button>
    </div>
    `)
}
export default WhoToFollowListItem