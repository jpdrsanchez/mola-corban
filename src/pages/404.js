import { Box, Button, Center, Heading, Icon } from '@chakra-ui/react'
import { IoArrowBackOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Custom404 = () => {
  return (
    <Center w="100%" maxW="600px" p={6} bg="white" boxShadow="sm">
      <Box>
        <Heading mb={4}>Página não encontrada</Heading>
        <Button
          colorScheme="teal"
          leftIcon={<Icon as={IoArrowBackOutline} />}
          size="lg"
          w="100%"
          as={Link}
          to="/"
        >
          Voltar
        </Button>
      </Box>
    </Center>
  )
}

export default Custom404
