import './topbar.css'

export default function Topbar() {
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-square-github"></i>
                <i className="topIcon fa-brands fa-square-x-twitter"></i>
                <i className="topIcon fa-solid fa-envelope"></i>
            </div>
            <div className="topCenter">
                <ul className='topList'>
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img className="topImg" src="assets/profilePic.png" alt="developers photograph" />
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
