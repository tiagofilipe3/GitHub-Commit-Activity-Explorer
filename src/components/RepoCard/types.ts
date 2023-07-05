import { TRepository } from '../../types.ts'
import { MouseEventHandler } from 'react'

type TRepoCard = {
  repo: TRepository
  color: string
  handleDelete: (id: number, repoName: string, repoOwner: string) => void
  highlightedRepo: number | null
  onMouseEnter: MouseEventHandler<HTMLDivElement>
  onMouseLeave: MouseEventHandler<HTMLDivElement>
}

type TContainer = {
  $highlightedRepo: boolean
}

export type { TRepoCard, TContainer }
