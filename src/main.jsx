import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { k } from './kaboomCtx.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

k.loadSprite("spritesheet", "./spritesheet.png", {
  sliceX: 39, 
  sliceY: 31,
  anims: {
    "idle-down": 936,
    "walk-down": {from: 936, to: 939, loop: true, speed: 8},
    "idle-side": 975,
    "walk-side": {from: 975, to: 978, loop: true, speed: 8},
    "idle-up": 1014,
    "walk-up": {from: 1014, to: 1017, loop: true, speed; 8},
  },
});