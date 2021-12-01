import { Box, Button, Center, Heading, Icon, Image } from '@chakra-ui/react'
import { useMemo } from 'react'
import { FiMoreVertical } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Item = ({ name = '', id = '' }) => {
  const idValue = useMemo(() => {
    const urlArray = id.split('/')
    return urlArray[urlArray.length - 2]
  }, [id])

  return (
    <Box
      bg="white"
      border="1px"
      borderColor="gray.200"
      borderRadius={4}
      alignItems="center"
      _hover={{
        boxShadow: 'lg',
        img: {
          transform: 'scale(1.05)',
          filter: 'none'
        }
      }}
      transition="all .3s"
    >
      <Center w="100%" h="200px">
        <Image
          src={`${process.env.REACT_APP_SPRITE_URL}/${idValue}.png`}
          alt={name}
          objectFit="contain"
          objectPosition="center"
          maxH="180px"
          sx={{
            filter: 'grayscale(100%)'
          }}
          _hover={{
            transform: 'scale(1.05)',
            filter: 'none'
          }}
          transition="all .5s"
        />
      </Center>
      <Box w="100%" py={5} px={4}>
        <Heading as="h3" size="md" textAlign="center" mb={4}>
          {name}
        </Heading>

        <Center>
          <Button
            as={Link}
            colorScheme="teal"
            size="md"
            cursor="pointer"
            leftIcon={<Icon as={FiMoreVertical} />}
            to={`/pokemon/${name}`}
          >
            Detalhes
          </Button>
        </Center>
      </Box>
    </Box>
  )
}

export default Item
