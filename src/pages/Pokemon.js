import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Skeleton,
  Text
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'
import { getPokemonDetails } from 'state/pokemonDetails'
import { IoArrowBackOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Pokemon = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const {
    details: { loading, error, data }
  } = useSelector(state => state)

  useEffect(() => {
    dispatch(getPokemonDetails(params.name))
  }, [dispatch, params])

  if (loading)
    return (
      <Container w="100%" maxW="container.lg">
        <Grid templateColumns="1fr 2fr" gap={6} alignItems="center">
          <GridItem>
            <Skeleton h="322px" w="100%" />
          </GridItem>
          <GridItem>
            <Skeleton h="290px" w="100%" />
          </GridItem>
        </Grid>
      </Container>
    )

  if (error) return <Navigate to="/404" replace={true} />

  if (data)
    return (
      <Container w="100%" maxW="container.lg">
        <Grid templateColumns="1fr 2fr" gap={6} alignItems="center">
          <GridItem>
            <Skeleton isLoaded={!loading}>
              <Box w="100%" p={6} bg="white" boxShadow="xs" borderRadius={6}>
                <Image
                  src={`${process.env.REACT_APP_SPRITE_URL}/${data?.id}.png`}
                  alt="Pokémon"
                  transition="all 1s"
                  _hover={{
                    transform: 'scale(1.1)'
                  }}
                />
              </Box>
            </Skeleton>
          </GridItem>
          <GridItem>
            <Skeleton isLoaded={!loading}>
              <Heading mb={4}>{data.name}</Heading>
              <Grid
                bg="blue.300"
                w="100%"
                px={6}
                py={8}
                borderRadius={6}
                templateColumns="repeat(3, 1fr)"
                column={4}
                rowGap={8}
                color="white"
              >
                <GridItem>
                  <Heading as="h3" mb={2}>
                    Altura
                  </Heading>
                  <Text>{data.height / 10} m</Text>
                </GridItem>
                <GridItem>
                  <Heading as="h3" mb={2}>
                    Peso
                  </Heading>
                  <Text>{data.weight / 10} kg</Text>
                </GridItem>
                <GridItem>
                  <Heading as="h3" mb={2}>
                    Espécie
                  </Heading>
                  <Text>{data.species.name}</Text>
                </GridItem>
                <GridItem>
                  <Heading as="h3" mb={2}>
                    Experiência
                  </Heading>
                  <Text>{data.base_experience}</Text>
                </GridItem>
              </Grid>
            </Skeleton>
          </GridItem>
          <GridItem>
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
          </GridItem>
        </Grid>
      </Container>
    )
  else return null
}

export default Pokemon
