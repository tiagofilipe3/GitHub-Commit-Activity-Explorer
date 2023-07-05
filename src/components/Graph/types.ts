import { TRepositoryActivity } from '../../types.ts'

type TGraph = {
  repositoryActivity: TRepositoryActivity[]
  graphLines: string[]
  colors: string[]
}

type TTooltip = {
  active?: boolean | undefined
  payload: never[]
  label: string
}

export type { TGraph, TTooltip }
