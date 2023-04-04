const NavigationSidebar = () => {
    return(`
    <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fas fa-home"></i>
                    <span class="d-none d-xl-inline">Home</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                    <i class="fas fa-hashtag"></i>
                    <span class="d-none d-xl-inline">Explore</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fas fa-bell"></i>
                    <span class="d-none d-xl-inline">Notifications</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fas fa-envelope"></i>
                    <span class="d-none d-xl-inline">Messages</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fas fa-bookmark"></i>
                    <span class="d-none d-xl-inline">Bookmarks</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fas fa-list"></i>
                    <span class="d-none d-xl-inline">Lists</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fas fa-user"></i>
                    <span class="d-none d-xl-inline">Profile</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fas fa-plus-circle"></i>
                    <span class="d-none d-xl-inline">More</span>
                </a>
            </div>
            <div class="mt-2">
                <button type="button" class="btn btn-primary rounded-pill wd-100">Tuit</button>
            </div>
 `);
}
export default NavigationSidebar;