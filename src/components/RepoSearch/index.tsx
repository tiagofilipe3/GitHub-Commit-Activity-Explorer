import { Container } from './styles.ts'
import AutoCompleteInput from '../AutoCompleteInput/'
import EmptyList from '../EmptyList'
import { TRepoSearch } from './types.ts'
import RepoCard from '../RepoCard'
import { useState } from 'react'

const RepoSearch = ({
  handleRepoActivitySearch,
  addedRepos,
  colors,
  handleDelete,
}: TRepoSearch) => {
  const [highlightedRepo, setHighlightedRepo] = useState<number | null>(null)

  return (
    <Container>
      <AutoCompleteInput
        placeholder="Search a Github Repository..."
        handleRepoActivitySearch={handleRepoActivitySearch}
      />
      {addedRepos.length > 0 ? (
        addedRepos.map((repo, i) => (
          <RepoCard
            key={repo.id}
            repo={repo}
            color={colors[i]}
            handleDelete={handleDelete}
            highlightedRepo={highlightedRepo}
            onMouseEnter={() => setHighlightedRepo(repo.id)}
            onMouseLeave={() => setHighlightedRepo(null)}
          />
        ))
      ) : (
        <EmptyList />
      )}
    </Container>
  )
}

export default RepoSearch
