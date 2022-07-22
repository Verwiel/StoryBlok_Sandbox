import { Route, Routes } from 'react-router-dom'
// import { getStoryblokApi } from "@storyblok/react"
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Resources from './pages/Resources'
import './App.css'

const App = () => {

  // const fetchStoryBlok = async () => {
  //   const storyblokApi = getStoryblokApi()
  //   const { data } = await storyblokApi.get("cdn/stories", { version: "draft" })
  //   console.log(data)

  // }
  
  // const storyBlokData = fetchStoryBlok()
  // console.log(storyBlokData)

  // return <StoryblokComponent blok={story.content} />

  return (
    <main>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/resources' element={<Resources/>}/>
      </Routes>
    </main>
  )
}

export default App
