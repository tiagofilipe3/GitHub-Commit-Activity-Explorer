import { TRepository } from '../../types.ts'

type TRepoSearch = {
  handleRepoActivitySearch: (repository: TRepository) => void
  addedRepos: TRepository[]
  colors: string[]
  handleDelete: (id: number, repoOwner: string, repoName: string) => void
}

export type { TRepoSearch }
