import React from "react"
import Popover from "./components/Popover/Popover"
import "./App.css"

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
        <Popover title={title} content={content} placement="top" trigger="click" />
        <Popover title={title} content={content} placement="bottom" trigger="click" />
      </div>

      <div className="container">
        <Popover title={title} content={content} placement="left" trigger="click" />
        <Popover title={title} content={content} placement="right" trigger="click" />
      </div>
    </div>
  )
}

export default App
