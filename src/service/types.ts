type TRepositoryResponse = {
  id: number
  owner: {
    login: string
  }
  name: string
  stargazers_count: number
  updated_at: string
}

type TResponse = {
  incomplete_results: boolean
  items: TRepositoryResponse[]
}

type TRepositoryActivityResponse = {
  days: number[]
  total: number
  week: number
}

export type { TRepositoryResponse, TResponse, TRepositoryActivityResponse }
