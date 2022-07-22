import React from "react"
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App"
import { storyblokInit, apiPlugin } from "@storyblok/react"
import Page from "./components/Page"
import Header from './components/Header'
import Teaser from "./components/Teaser"
import Grid from "./components/Grid"
import Feature from "./components/Feature"

storyblokInit({
  accessToken: process.env.REACT_APP_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    header: Header,
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
  },
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
