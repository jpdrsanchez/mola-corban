import { Button, Icon, IconButton, Wrap } from '@chakra-ui/react'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

const Pagination = () => {
  const {
    pokemon: { count, total_pages, next, previous }
  } = useSelector(state => state)
  const params = useParams()

  return (
    <>
      {!!count && !!total_pages && (
        <Wrap as="nav" mt={8} justify="center" spacing={2}>
          <IconButton
            aria-label="Primeira Página"
            colorScheme="teal"
            variant="outline"
            icon={<Icon as={HiChevronDoubleLeft} />}
            as={Link}
            to="/"
            isDisabled={!previous}
          />
          <Button
            colorScheme="teal"
            as={Link}
            to={`/${params.id ? Number(params.id) - 1 : 1}`}
            isDisabled={!previous}
          >
            ...
          </Button>
          {Array(total_pages)
            .fill(0)
            .filter((_, index) => {
              if (params.id) {
                if (Number(params.id) + 9 > total_pages)
                  return index >= Number(params.id) && index <= total_pages
                return (
                  index >= Number(params.id) && index < Number(params.id) + 9
                )
              }
              return index <= 9
            })
            .map((_, index) => {
              return (
                <Button
                  key={index}
                  colorScheme="teal"
                  as={Link}
                  to={`/${params.id ? index + Number(params.id) : index + 1}`}
                >
                  {params.id ? index + Number(params.id) : index + 1}
                </Button>
              )
            })}
          <Button
            colorScheme="teal"
            as={Link}
            to={`/${
              params.id
                ? Number(params.id) + 9 > total_pages
                  ? Number(params.id) + 1
                  : Number(params.id) + 9
                : 11
            }`}
            isDisabled={!next}
          >
            ...
          </Button>
          <IconButton
            aria-label="Primeira Página"
            colorScheme="teal"
            variant="outline"
            icon={<Icon as={HiChevronDoubleRight} />}
            as={Link}
            to={`/${total_pages}`}
            isDisabled={!next}
          />
        </Wrap>
      )}
    </>
  )
}

export default Pagination
