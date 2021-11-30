import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<p>Home</p>} />
      <Route path="/:id" element={<p>ID</p>} />
    </Routes>
  )
}

export default App
