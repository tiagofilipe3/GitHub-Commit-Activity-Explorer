import { Flex } from 'rebass'

import { TRepoCard } from './types.ts'
import {
  Container,
  Stargazers,
  StyledStarIcon as Star,
  StyledTrashIcon as Trash,
  TrashContainer,
  Updated,
} from './styles.ts'
import { Owner, Name } from './styles.ts'
import { formatCompactNumber, formatDateRelativeTime } from '../../utils.ts'

const RepoCard = ({
  repo,
  color,
  handleDelete,
  onMouseEnter,
  onMouseLeave,
  highlightedRepo,
}: TRepoCard) => {
  const { id, repoOwner, repoName, stargazersCount, updatedAt } = repo

  return (
    <Container
      color={color}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      $highlightedRepo={!highlightedRepo || highlightedRepo === id}
    >
      <Flex flexDirection="column" width="100%">
        <Flex>
          <Owner>{repoOwner}</Owner>&nbsp;/&nbsp;<Name>{repoName}</Name>
        </Flex>
        <Flex mt="8px">
          <Stargazers>
            <Star />
            {formatCompactNumber(stargazersCount)}
          </Stargazers>
          <Updated>{formatDateRelativeTime(updatedAt)}</Updated>
        </Flex>
      </Flex>
      <TrashContainer>
        <Trash onClick={() => handleDelete(id, repoOwner, repoName)} />
      </TrashContainer>
    </Container>
  )
}

export default RepoCard
