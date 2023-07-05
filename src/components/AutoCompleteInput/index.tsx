import { FormEvent, useEffect, useRef, useState } from 'react'

import {
  AutoCompleteContainer,
  InputContainer,
  Name,
  Owner,
  StyledInput,
  StyledSearchIcon,
  Suggestion,
  SuggestionsContainer,
} from './styles.ts'
import { TAutoCompleteInput } from './types.ts'
import { useDebounce } from 'use-debounce'
import { TRepository } from '../../types.ts'
import { getRepositories } from '../../service'
import { useOutsideAlerter } from '../../hooks'

const AutoCompleteInput = ({
  handleRepoActivitySearch,
  ...rest
}: TAutoCompleteInput) => {
  const [search, setSearch] = useState('')
  const [value] = useDebounce(search, 250)
  const [suggestions, setSuggestions] = useState<TRepository[]>([])
  const inputRef = useRef(null)
  const containerRef = useRef(null)

  const handleClickOutside = () => {
    setSearch('')
    setSuggestions([])
  }

  useOutsideAlerter(inputRef, handleClickOutside, [containerRef])

  const handleSearch = async (value: string) => {
    const repos = await getRepositories(value)
    setSuggestions(repos)
  }

  useEffect(() => {
    if (value) {
      handleSearch(value)
    }
  }, [value])

  return (
    <AutoCompleteContainer>
      <InputContainer>
        <StyledInput
          ref={inputRef}
          $hasSuggestions={suggestions.length > 0}
          placeholder="Search a Github Repository..."
          onChange={(e: FormEvent<HTMLInputElement>) =>
            setSearch(e.currentTarget.value)
          }
          value={search}
          {...rest}
        />
        <StyledSearchIcon />
      </InputContainer>
      {suggestions && suggestions.length > 0 && (
        <SuggestionsContainer ref={containerRef}>
          {suggestions.map(({ id, repoOwner, repoName, ...rest }) => (
            <Suggestion
              key={id}
              onClick={() => {
                handleRepoActivitySearch({ id, repoOwner, repoName, ...rest })
                setSuggestions([])
                setSearch('')
              }}
            >
              <Owner>{repoOwner}</Owner>&nbsp;/&nbsp;<Name>{repoName}</Name>
            </Suggestion>
          ))}
        </SuggestionsContainer>
      )}
    </AutoCompleteContainer>
  )
}

export default AutoCompleteInput
