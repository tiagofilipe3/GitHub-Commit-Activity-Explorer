import styled from 'styled-components'
import facepaint from 'facepaint'

const mq = facepaint(['@media(min-width: 1440px)', '@media(min-width: 1920px)'])

const Container = styled.div`
  ${mq({
    width: ['650px', '538px', '630px'], //default, 1440px, 1920px
  })}

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0 32px;
  background-color: #37374a;
  flex-shrink: 0;
  overflow: auto;
`

export { Container }
