import { Commits, Container, Date, Name, Owner } from './styles'
import { TooltipProps } from 'recharts'
import { Flex } from 'rebass'

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  const getFullRepo = (dataKey: string | number | undefined) => {
    if (typeof dataKey === 'string') {
      const [owner, repo] = dataKey.split('/')

      return (
        <Flex>
          <Owner>{owner}&nbsp;/&nbsp;</Owner>
          <Name>{repo}</Name>
        </Flex>
      )
    } else {
      return dataKey
    }
  }

  if (active && payload && payload.length) {
    return (
      <Container>
        <Date>{label}</Date>
        {payload
          .sort((a, b) => (b.value && a.value ? b.value - a.value : 0))
          .map((item, i) => {
            return (
              <Commits key={i}>
                {getFullRepo(item.dataKey)}: {item.value} commits
              </Commits>
            )
          })}
      </Container>
    )
  }

  return null
}

export default CustomTooltip
