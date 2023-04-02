import "./sidebar.css"


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    ABOUT ME

                </span>
                <img src="/images/headerimgapple.jpeg" width="300px" height= "300px" alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Repellat optio assumenda asperiores facilis vitae quos nemo
                    illum dolorem tenetur reprehenderit ratione, doloremque corrupti
                    dignissimos exercitationem esse aperiam nihil nisi eligendi.</p>

            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>

            </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-facebook"></i>
                <i className="sidebarIcon fa-brands fa-twitter"></i>
                <i className="sidebarIcon fa-brands fa-instagram"></i>
                <i className="sidebarIcon fa-brands fa-pinterest"></i>
                </div>
            </div>

        </div>
    )
}
