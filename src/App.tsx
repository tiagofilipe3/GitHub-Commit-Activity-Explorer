import { useState } from 'react'
import { Flex } from 'rebass'

import Graph from './components/Graph'
import RepoSearch from './components/RepoSearch'
import { getRepoActivity } from './service'
import { TRepository, TRepositoryActivity } from './types.ts'

const colors = [
  '#4CCA8D',
  '#D65C5C',
  '#71B7F8',
  '#3A4454',
  '#DEBA6F',
  '#442B48',
  '#F75C03',
  '#F2D7EE',
  '#73BA9B',
  '#7D98A1',
]

function App() {
  const [repositoryActivity, setRepositoryActivity] = useState<
    TRepositoryActivity[]
  >([])
  const [graphLines, setGraphLines] = useState<string[]>([])
  const [addedRepos, setAddedRepos] = useState<TRepository[]>([])

  const handleRepoActivitySearch = async ({
    repoOwner,
    repoName,
    ...rest
  }: TRepository) => {
    if (addedRepos.length === 10) {
      alert('You can only add up to 10 repositories')
      return
    }

    const hasBeenAdded = addedRepos.some(
      (repo) => repo.repoOwner === repoOwner && repo.repoName === repoName
    )

    if (hasBeenAdded) {
      alert('This repository is already added')
      return
    }

    const fullRepoName = repoOwner + '/' + repoName

    const activity = (await getRepoActivity(
      repoOwner,
      repoName
    )) as TRepositoryActivity[]

    if (activity.length === 0) {
      alert('No activity found for this repository')
      return
    }

    if (repositoryActivity.length > 0) {
      const newRepos: TRepositoryActivity[] = repositoryActivity.map(
        (repo, i) =>
          ({
            ...repo,
            [fullRepoName]: activity[i][fullRepoName],
          } as TRepositoryActivity)
      )
      setRepositoryActivity(newRepos)
    } else {
      setRepositoryActivity(activity)
    }

    setGraphLines([...graphLines, fullRepoName])
    setAddedRepos([...addedRepos, { repoOwner, repoName, ...rest }])
  }

  const handleDelete = (id: number, repoOwner: string, repoName: string) => {
    const fullRepoName = repoOwner + '/' + repoName

    const newRepos = addedRepos.filter((repo) => repo.id !== id)
    setAddedRepos(newRepos)

    const newLines = graphLines.filter((line) => line !== fullRepoName)
    setGraphLines(newLines)

    if (newRepos.length > 0) {
      const newActivity = repositoryActivity.map((repo) => {
        const { [fullRepoName]: deletedRepo, ...rest } = repo
        return rest
      }) as TRepositoryActivity[]

      setRepositoryActivity(newActivity)
    } else {
      setRepositoryActivity([])
    }
  }

  return (
    <Flex height="100%">
      <Graph
        repositoryActivity={repositoryActivity}
        graphLines={graphLines}
        colors={colors}
      />
      <RepoSearch
        handleRepoActivitySearch={handleRepoActivitySearch}
        addedRepos={addedRepos}
        colors={colors}
        handleDelete={handleDelete}
      />
    </Flex>
  )
}

export default App
