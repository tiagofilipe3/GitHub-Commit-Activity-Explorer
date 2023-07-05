import styled from 'styled-components'
import facepaint from 'facepaint'

const mq = facepaint(['@media(min-width: 1440px)', '@media(min-width: 1920px)'])

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 474px;
  height: 208px;
  flex-shrink: 0;
  border-radius: 16px;
  background: #242432;
  margin-top: 16px;

  ${mq({
    width: ['474px', '474px', '560px'],
  })}
`

const EmptyListDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  width: 338px;
  margin-top: 24px;
  color: #bcbcf2;
  text-align: center;
  font-size: 18px;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`

export { Container, EmptyListDescription }
