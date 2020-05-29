import React from "react";
import { Link } from "react-router-dom";


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
            <span>My React Blog</span>
            <ul>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <Link to={link.title}> {link.title} </Link>
                    </li>
                ))}
            </ul>
        </nav>);
}