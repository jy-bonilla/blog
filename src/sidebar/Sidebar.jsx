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
                <span className="sidebarTitle">A</span>
            </div>
        </div>
    )
}
