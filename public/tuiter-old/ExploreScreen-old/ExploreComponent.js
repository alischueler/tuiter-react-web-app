import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class="row">
            <div class="col-11">
                <i id="searchIcon" class="fa fa-search"></i>
                <input id="search" placeholder="Search Tuiter" class="rounded-pill form-control">
            </div>
            <div class="col-1 position-relative">
                <div class="position-absolute start-0 bottom-0 ms-sm-0 ms-md-2 ms-lg-1 ms-xxl-2">
                    <i id="cogIcon" class="fa fa-cog fa-2x" style="color: #0275d8"></i>
                </div>
            </div>
        </div>
        <ul class="nav nav-tabs mt-2">
            <li class="nav-item">
                <a class="nav-link active" href="../for-you.html">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../sports.html">Sports</a>
            </li>
            <li class="nav-item d-none d-md-inline">
                <a class="nav-link" href="../entertainment.html">Entertainment</a>
            </li>
        </ul>
        <div class="position-relative mt-2">
            <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" width="100%"/>
            <h2 class="position-absolute text-white bottom-0 start-0 ms-2">SpaceX's Starship</h2>
        </div>
         ${PostSummaryList()}
    `)
}
export default ExploreComponent