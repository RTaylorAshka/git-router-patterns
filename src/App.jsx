
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dog from './Dog'
import Dogs from './Dogs'
import dogData from './dogData'
import colorData from './colorData'
import Colors from './Colors'
import Color from './Color'
import NotFound from './NotFound'
import './App.css'
import NewColorForm from './NewColorForm'
import { useState } from 'react'

function App() {
  const [colors, setColors] = useState(colorData)

  function addColor(name, value) {
    console.log()
    setColors({
      ...colors, [name]: value
    })
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/dogs' element={<Dogs dogs={dogData} />} />
          <Route path='/dogs/:name' element={<Dog dogs={dogData} />} />
          <Route path='/colors' element={<Colors colors={colors} />} />
          <Route path='/colors/new' element={<NewColorForm addColor={addColor} />} />
          <Route path='/colors/:color' element={<Color colors={colors} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App;