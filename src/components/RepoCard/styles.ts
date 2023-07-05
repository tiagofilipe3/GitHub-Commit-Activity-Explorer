import styled from 'styled-components'
import facepaint from 'facepaint'

import { ReactComponent as StarIcon } from '../../assets/star.svg'
import { ReactComponent as TrashIcon } from '../../assets/trash.svg'
import { TContainer } from './types.ts'

const mq = facepaint(['@media(min-width: 1440px)', '@media(min-width: 1920px)'])

const StyledTrashIcon = styled(TrashIcon)`
  display: none;
  cursor: pointer;
`

const TrashContainer = styled.div`
  display: none;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 70px;
  height: 80px;
  align-items: center;
  justify-content: center;
  background: rgba(39, 39, 54, 0.9);
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`

const Container = styled.div<TContainer>`
  ${mq({
    width: ['474px', '474px', '560px'],
  })}

  display: flex;
  padding: 16px 24px;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  background: #272736;
  box-shadow: ${({ color }) => `8px 0 0 0 ${color} inset`};
  width: 474px;
  margin-top: 25px;
  color: #bfbdd9;
  position: relative;
  cursor: pointer;
  opacity: ${({ $highlightedRepo }) =>
    $highlightedRepo || $highlightedRepo === null ? 1 : 0.4};
  transition: opacity 0.1s ease-in-out;

  &:hover ${TrashContainer}, ${StyledTrashIcon} {
    display: flex;
  }
`

const Owner = styled.div`
  color: #bfbdd9;
  font-size: 18px;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const Name = styled(Owner)`
  font-weight: bold;
  color: #fff;
  max-width: 340px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`
const Stargazers = styled.div`
  display: flex;
  color: #fff;
  font-size: 14px;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const StyledStarIcon = styled(StarIcon)`
  margin-right: 4px;
`

const Updated = styled.div`
  display: flex;
  margin-left: 8px;
  color: #bfbdd9;
  font-size: 14px;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export {
  Container,
  Owner,
  Name,
  Stargazers,
  StyledStarIcon,
  Updated,
  StyledTrashIcon,
  TrashContainer,
}
