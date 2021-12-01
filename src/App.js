import { Box, Flex } from '@chakra-ui/react'
import Custom404 from 'pages/404'
import Home from 'pages/Home'
import Pokemon from 'pages/Pokemon'
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
          <Route path="/pokemon/:name" element={<Pokemon />} />
          <Route path="/404" element={<Custom404 />} />
          <Route path="*" element={<Custom404 />} />
        </Routes>
      </Flex>
    </Box>
  )
}

export default App
