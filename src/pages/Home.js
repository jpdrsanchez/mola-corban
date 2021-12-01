import { Box } from '@chakra-ui/react'
import UserList from 'components/UserList'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUsersList } from 'state/userList'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsersList())
  }, [dispatch])

  return (
    <Box maxW="600px" w="100%">
      <UserList />
    </Box>
  )
}

export default Home
