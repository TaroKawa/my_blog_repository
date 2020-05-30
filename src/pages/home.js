import React from "react"
import { PostMasonry, MasonryPost } from "../components/common"
import trending from "../assets/mocks/trending"
import featured from "../assets/mocks/featured"

const trendingConfig = {
    1: {
        gridArea: '1/2/3/4/'
    }
}

const featuredConfig = {
    0: {
        gridArea: '1/1',
        height: "300px"
    },
    1: {
        height: "300px",
    },
    //3: {
    //    height: "630px",
    //    marginleft: "30px",
    //    width: "630px"
    //}
}

const mergeStyles = function (posts, config) {
    posts.forEach((post, index) => {
        post.style = config[index]
    })
}

mergeStyles(trending, trendingConfig)
mergeStyles(featured, trendingConfig)

const lastFeatured = featured.pop()


export default function Home() {
    return (

        <section className="container home">
            <div className="row">
                <h1>Latest Post</h1>
                <div className="latest-post">
                    <section className="featured-posts-container">
                        <MasonryPost post={lastFeatured} tagsOnTop={true} />
                    </section>
                </div>
                {/*
                <h1>Latest Post</h1>
                <section className="featured-posts-container">
                    <PostMasonry posts={featured} columns={2} tagsOnTop={true} />
                </section>
                 */}

                <h1>Previous Posts</h1>
                <PostMasonry posts={trending} columns={2} />

            </div>
        </section >
    )
}