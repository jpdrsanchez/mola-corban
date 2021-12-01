import { Box, Flex } from '@chakra-ui/react'
import Home from 'pages/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Box bg="gray.50" py={4} px={8}>
      <Flex
        minH="calc(100vh - 32px)"
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Home />} />
          <Route path="/pokemon/:name" element={<p>ID</p>} />
        </Routes>
      </Flex>
    </Box>
  )
}

export default App
