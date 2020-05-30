import React from "react";
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
                    <span className="menu-avatar-name">{`${user.firstName} ${user.lastName}`}</span>
                </span>
            </div>
        </nav>);
}