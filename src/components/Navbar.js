import React from 'react'
import { StoryblokComponent, storyblokEditable } from "@storyblok/react"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/resources'>Resources</Link>
    </nav>
  )
}

export default Navbar
