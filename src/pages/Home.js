import { Container } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getList } from 'state/pokemonsList'
import PokemonList from 'components/List'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getList())
  }, [dispatch])

  return (
    <Container maxW="container.xl" w="100%">
      <PokemonList />
    </Container>
  )
}

export default Home
