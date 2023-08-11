import './sidebar.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats();
    }, [])
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
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className='link'>
                            <li className='sidebarListItem'>{c.name}</li>
                        </Link>
                    ))}
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
