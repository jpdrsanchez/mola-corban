import { Grid } from '@chakra-ui/react'
import Item from 'components/Item'

const List = () => {
  return (
    <Grid gap={4} gridTemplateColumns="repeat(4, 1fr)">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </Grid>
  )
}

export default List
