import { storyblokEditable } from "@storyblok/react"

const Header = ({ blok }) => {
  return (
    <h1 className={blok.style} {...storyblokEditable(blok)}>
      {blok.title}
    </h1>
  )
};

export default Header
