import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "antd"


const navLinks = [
    {
        title: "home",
        path: "/"
    },
    {
        title: "blog",
        path: "/blog"
    },
    {
        title: "contact-me",
        path: "/contact-me"
    },
]

export default function Navigation({ user }) {
    const [menuActive, setMenuActive] = useState(false)
    return (
        <nav className="site-navigation">
            <span className="nume-title">My Awwsome Blog</span>
            <div className="menu-content-container">
                <ul>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.title}> {link.title} </Link>
                        </li>
                    ))}
                </ul>
                <span>

                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={32} />
                    <span className="menu-avatar">{`${user.firstName} ${user.lastName}`}</span>
                </span>
                <i className="ionicons icon ion-ios-menu" onClick={() => setMenuActive(!menuActive)} />
            </div>
        </nav>);
}