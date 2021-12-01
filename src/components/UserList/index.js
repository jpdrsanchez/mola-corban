import { Grid } from '@chakra-ui/react'
import UserItem from 'components/UserItem'

const UserList = () => {
  return (
    <Grid gap={4}>
      <UserItem />
      <UserItem />
      <UserItem />
      <UserItem />
      <UserItem />
    </Grid>
  )
}

export default UserList
