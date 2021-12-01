import {
  Avatar,
  Box,
  Button,
  Grid,
  Heading,
  Icon,
  Text
} from '@chakra-ui/react'
import { FaUserAlt } from 'react-icons/fa'
const UserItem = () => {
  return (
    <Grid
      bg="white"
      p={4}
      w="100%"
      boxShadow="xs"
      borderRadius={2}
      templateColumns="1fr 3fr 1fr"
      alignItems="center"
    >
      <Box w="100%">
        <Avatar name="João Pedro Sanchez" />
      </Box>
      <Box w="100%">
        <Heading as="h3" size="md" mb={1}>
          jpdrsanchez
        </Heading>
        <Text>User</Text>
      </Box>
      <Box w="100%">
        <Button
          as="a"
          colorScheme="teal"
          size="md"
          cursor="pointer"
          leftIcon={<Icon as={FaUserAlt} />}
        >
          Profile
        </Button>
      </Box>
    </Grid>
  )
}

export default UserItem
