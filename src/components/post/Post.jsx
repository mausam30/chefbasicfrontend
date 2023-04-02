import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img className="postImg"
                src="./images/flowerpost.jpeg" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Eius sit recusandae incidunt magni soluta nostrum earum sed doloribus, 
                obcaecati vitae id suscipit odit. Nihil officiis ab pariatur harum cumque possimus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Eius sit recusandae incidunt magni soluta nostrum earum sed doloribus, 
                obcaecati vitae id suscipit odit. Nihil officiis ab pariatur harum cumque possimus.</p>

            <hr />
        </div>

    )
}
