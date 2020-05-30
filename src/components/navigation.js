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

export default function Navigation() {
    return (
        <nav className="site-navigation">
            <span className="nume-title">My Awwsome Blog</span>
            <div>

                <ul>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.title}> {link.title} </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </nav>);
}