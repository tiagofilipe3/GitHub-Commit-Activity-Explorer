import styled from 'styled-components'

const Container = styled.div`
  display: inline-flex;
  padding: 8px 16px;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 3px 12px 0px rgba(0, 0, 0, 0.08);
`

const Date = styled.div`
  color: #6d6d90;
  font-size: 14px;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 4px;
`

const Commits = styled.div`
  display: flex;
  align-items: center;
  color: #37374a;
  font-size: 14px;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const Owner = styled.div`
  color: #bfbdd9;
  font-size: 14px;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const Name = styled(Owner)`
  font-weight: 700;
  color: #37374a;
`

export { Container, Date, Commits, Owner, Name }
