import { Link } from 'react-router-dom';
import './topbar.css'

export default function Topbar() {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-square-github"></i>
                <i className="topIcon fa-brands fa-square-x-twitter"></i>
                <i className="topIcon fa-solid fa-envelope"></i>
            </div>
            <div className="topCenter">
                <ul className='topList'>
                    <li className="topListItem">
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li className="topListItem"><Link className="link" to="/about">About</Link></li>
                    <li className="topListItem"><Link className="link" to="/contact">Contact</Link></li>
                    <li className="topListItem">
                        <Link className="link" to="/write">Write</Link>
                    </li>
                    {user && <li className="topListItem">LOGOUT</li>}
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <Link className="link" to="/settings">
                        <img className="topImg" src="assets/profilePic.png" alt="developers photograph" />
                    </Link>
                ) : (
                    <ul className='topList'>
                        <li className="topListItem">
                            <Link className="link" to="/login">Login</Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">Register</Link>
                        </li>
                    </ul>
                )
                }

                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div >
    )
}
