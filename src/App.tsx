import React from "react"
import Popover from "./components/Popover/Popover"
import "./App.css"
import LayerCard from "./components/LayerCard/LayerCard"
import CardMedia from "./assets/card-media.png"

function App() {
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  )

  const title = <span>Title</span>

  return (
    <div className="App">
      <div className="container">
        <Popover title={title} content={content} placement="top" trigger="click">
          <LayerCard label={"Flood zone 3"} backgroundImage={CardMedia} />
        </Popover>
      </div>
    </div>
  )
}

export default App
