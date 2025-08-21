import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Scanner from './ocr-scanner'

function App() {
  const [count, setCount] = useState(0)

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api");
    console.log(response.data.fruits);
  };

  useEffect(() => {
    fetchAPI();
  }, [])

  return (
    <>
      <div>
        <h1>React Webcam</h1>
        <Scanner></Scanner>
      </div>
    </>
  )
}

export default App
