import styled from 'styled-components'
import facepaint from 'facepaint'

import { ReactComponent as SearchIcon } from '../../assets/search.svg'
import { TStyledInput } from './types.ts'

const mq = facepaint(['@media(min-width: 1440px)', '@media(min-width: 1920px)'])

const InputContainer = styled.div`
  display: flex;
  position: relative;
`

const StyledInput = styled.input<TStyledInput>`
  font-family: 'Roboto', sans-serif;
  ${mq({
    width: ['474px', '474px', '560px'],
  })}
  height: 60px;
  flex-shrink: 0;

  background: #fff;
  color: #8383af;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 0 0 0 24px;
  border: none;

  ${({ $hasSuggestions }) =>
    $hasSuggestions
      ? `
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  `
      : `border-radius: 4px;`}

  &:focus-visible {
    outline: none;
  }
`

const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);
`

const AutoCompleteContainer = styled.div`
  position: relative;
`

const SuggestionsContainer = styled.div`
  position: absolute;
  top: 60px;
  height: 264px;
  ${mq({
    width: ['474px', '474px', '560px'],
  })}
  background: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  z-index: 1;
`

const Suggestion = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  ${mq({
    width: ['474px', '474px', '560px'],
  })}
  height: 44px;
  flex-shrink: 0;
  background: #fff;
  cursor: pointer;

  &:hover {
    background: #ececf6;
  }
`

const Owner = styled.div`
  color: #bfbdd9;
  font-size: 16px;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const Name = styled(Owner)`
  font-weight: bold;
  color: #212427;
`

export {
  StyledInput,
  InputContainer,
  StyledSearchIcon,
  AutoCompleteContainer,
  SuggestionsContainer,
  Suggestion,
  Owner,
  Name,
}
