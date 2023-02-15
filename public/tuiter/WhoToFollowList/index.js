import who from './who.js'
import WhoToFollowListItem from './WhoToFollowListItem.js'

const WhoToFollowList = () => {
    return(`
        <div class="border border-bottom-0 pt-2">
            <div class="border-0 border-bottom ps-3 pb-2">
                <b>Who to follow</b>
            </div>
     ${
        who.map(user => {
            return(WhoToFollowListItem(user));
        }).join('')
    }
     </div>
    `)
}
export default WhoToFollowList