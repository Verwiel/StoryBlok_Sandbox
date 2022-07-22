import React from 'react'
import { useStoryblok, StoryblokComponent } from "@storyblok/react"

const Resources = () => {
    let slug =
        window.location.pathname === "/"
        ? "home"
        : window.location.pathname

    const story = useStoryblok(slug, { version: "draft" })
    if (!story || !story.content) {
        return <div>Loading...</div>
    }

    console.log(story)

    return (
        <main>
            <StoryblokComponent blok={story.content} />
            {/* <h1>{story.content.body[0].headline}</h1> */}
        </main>
    )
}

export default Resources
