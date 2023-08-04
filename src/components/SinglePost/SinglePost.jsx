import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src="assets/mountains.png" alt="" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-regular fa-trash-can"></i>
                    </div>
                </h1>
                <div className="classnameSinglePostInfo">
                    <span className="singlePostAuthor">Author: <b>Bonilla</b></span>
                    <span className="singlePosDate"> 1 hour ago</span>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis
                    similique perspiciatis dolores deserunt, recusandae eum, consequatur cupiditate,
                    optio debitis laudantium repudiandae magnam reprehenderit reiciendis quam temporibus
                    explicabo neque asperiores?
                </p>
            </div>
        </div>
    )
}
