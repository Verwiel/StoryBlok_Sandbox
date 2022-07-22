import { storyblokEditable } from "@storyblok/react"

const Teaser = ({ blok }) => {
  return (
    <h1 style={{ textAlign: "center" }} {...storyblokEditable(blok)}>
      {blok.headline}
    </h1>
  )
};

export default Teaser
