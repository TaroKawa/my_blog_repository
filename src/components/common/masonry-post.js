import React from "react"

export default function MansoryPost({ post, tagsOnTop }) {
    const style = { backgroundImage: `url("${require(`../../assets/images/${post.image}`)}")` };
    return (
        <a className="mansory-post overlay" style={style} href={post.link}>
            <div className="image-text">
                <div>
                    <h2 className="image-title">{post.title}</h2>

                </div>

            </div>

        </a >
    )
}