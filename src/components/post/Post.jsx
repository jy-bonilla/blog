import './post.css'

export default function Post() {
    return (
        <div className='post'>
            <img className="postImg" src="assets/mountains.png"
                alt="misty morning over mountains" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className='postDesc'>Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Reiciendis dicta culpa explicabo, voluptate harum
                necessitatibus sint sapiente eaque aspernatur!
                Quisquam corporis asperiores quia mollitia
                tenetur, debitis molestiae. Totam, quo aliquam.
                Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Reiciendis dicta culpa explicabo, voluptate harum
                necessitatibus sint sapiente eaque aspernatur!
                Quisquam corporis asperiores quia mollitia
                tenetur, debitis molestiae. Totam, quo aliquam.
                Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Reiciendis dicta culpa explicabo, voluptate harum
                necessitatibus sint sapiente eaque aspernatur!
                Quisquam corporis asperiores quia mollitia
                tenetur, debitis molestiae. Totam, quo aliquam.
                Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Reiciendis dicta culpa explicabo, voluptate harum
                necessitatibus sint sapiente eaque aspernatur!
                Quisquam corporis asperiores quia mollitia
                tenetur, debitis molestiae. Totam, quo aliquam.
            </p>
        </div>
    )
}