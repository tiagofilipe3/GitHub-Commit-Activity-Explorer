import { Container, EmptyListDescription } from './styles.ts'
import { ReactComponent as GraySearch } from '../../assets/gray-search.svg'

const EmptyList = () => {
  return (
    <Container>
      <GraySearch />
      <EmptyListDescription>
        Search for a GitHub repository to populate graph
      </EmptyListDescription>
    </Container>
  )
}

export default EmptyList
