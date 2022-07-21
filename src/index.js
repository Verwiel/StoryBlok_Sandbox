import React from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App"
import { storyblokInit, apiPlugin } from "@storyblok/react"
import Page from "./components/Page"
import Teaser from "./components/Teaser"
import Grid from "./components/Grid"
import Feature from "./components/Feature"

storyblokInit({
  accessToken: "VLIdz810xh2HsaAVlJeVeQtt",
  use: [apiPlugin],
  components: {
    page: Page,
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
  },
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
