import "./singlePost.css"

export default function Singlepost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="./images/nature.jpeg" alt="" className="singlePostImage" />
            
            <h1 className="singlePostTitle">Lorem ipsum dolor sit amet
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-regular fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Mausam</b></span>
                <span className="singlePostAuthor">1 hour ago</span>
            </div>
            <p className="singlePostDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Praesentium, architecto sequi velit aperiam eius modi quaerat 
                ex amet exercitationem explicabo, ratione blanditiis voluptate ullam qui
                 ad non dolore facilis maiores.
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Praesentium, architecto sequi velit aperiam eius modi quaerat 
                ex amet exercitationem explicabo, ratione blanditiis voluptate ullam qui
                 ad non dolore facilis maiores.

            </p>
            </div>
        </div>
    )
}
