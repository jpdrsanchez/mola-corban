import { Container, Heading } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getList } from 'state/pokemonsList'
import PokemonList from 'components/List'
import Pagination from 'components/Pagination'
import { Navigate, useParams } from 'react-router-dom'

const Home = () => {
  const dispatch = useDispatch()
  const {
    pokemon: { per_page, error }
  } = useSelector(state => state)
  const params = useParams()

  useEffect(() => {
    if (!params.id) dispatch(getList())
    if (params.id) dispatch(getList(per_page * (params.id - 1)))
  }, [params, per_page, dispatch])

  if (error) return <Navigate to="/404" replace={true} />

  return (
    <Container maxW="container.xl" w="100%">
      <Heading textAlign="center" mt={5} mb={12}>
        Pokédex {!!params.id && `- Página ${params.id}`}
      </Heading>
      <PokemonList />
      <Pagination />
    </Container>
  )
}

export default Home
