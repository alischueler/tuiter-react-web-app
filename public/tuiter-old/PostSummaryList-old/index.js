import posts from './posts.js'
import PostSummaryListItem from './PostSummaryListItem.js'

const PostSummaryList = () => {
    return(`
        <div class="border border-start-0 border-end-0 border-top-0">
         ${
        posts.map(post => {
            return(PostSummaryListItem(post));
        }).join('')
    }
        </div>
    `)
}
export default PostSummaryList