import { InputHTMLAttributes } from 'react'
import { TRepository } from '../../types.ts'

type TStyledInput = {
  $hasSuggestions: boolean
}

type TAutoCompleteInput = InputHTMLAttributes<HTMLInputElement> & {
  handleRepoActivitySearch: (repository: TRepository) => void
}

export type { TStyledInput, TAutoCompleteInput }
