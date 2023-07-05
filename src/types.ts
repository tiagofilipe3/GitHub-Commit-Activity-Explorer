type TRepository = {
  id: number
  repoOwner: string
  repoName: string
  stargazersCount: number
  updatedAt: string
}

type TRepositoryActivity = Record<string, number> & {
  week: string
}

export type { TRepository, TRepositoryActivity }
