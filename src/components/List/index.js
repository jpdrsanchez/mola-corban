import { Grid, Skeleton } from '@chakra-ui/react'
import Item from 'components/Item'
import { useSelector } from 'react-redux'

const List = () => {
  const {
    pokemon: { data, loading, per_page }
  } = useSelector(state => state)

  return (
    <Grid
      gap={4}
      gridTemplateColumns={[
        '1fr',
        'repeat(2, 1fr)',
        'repeat(3, 1fr)',
        'repeat(4, 1fr)'
      ]}
    >
      {loading &&
        Array(per_page)
          .fill(0)
          .map((_, index) => <Skeleton key={index} w="300px" h="322px" />)}
      {!loading &&
        !!data?.length &&
        data.map((item, index) => (
          <Item key={index} name={item.name} id={item.url} />
        ))}
    </Grid>
  )
}

export default List
