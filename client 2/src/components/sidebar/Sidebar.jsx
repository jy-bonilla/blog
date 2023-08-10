import './sidebar.css'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="assets/mainLogo2.png" alt="bonillaCodes Logo" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, maiores suscipit corrupti consequatur cumque voluptate dolor fugit! Deserunt, ipsa quibusdam
                    sapiente quos nesciunt pariatur nam accusantium, totam quo eligendi eius.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">JavaScript</li>
                    <li className="sidebarListItem">PYTHON</li>
                    <li className="sidebarListItem">Java</li>
                    <li className="sidebarListItem">Tech</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Contact Me</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-square-github"></i>
                    <i className="sidebarIcon fa-brands fa-square-x-twitter"></i>
                    <i className="sidebarIcon fa-solid fa-envelope"></i>
                </div>
            </div>
        </div>
    )
}
