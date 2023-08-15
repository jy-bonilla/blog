import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import './topbar.css'

export default function Topbar() {
    const { user, dispatch } = useContext(Context);

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    }
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
                    <li className='topListItem' onClick={handleLogout}> {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <Link className="link" to="/settings">
                        <img className="topImg" src={user.profilePic} alt="developers photograph" />
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
