import * as dayjs from 'dayjs'

const formatCompactNumber = (number: number) => {
  if (number < 1000) {
    return number
  } else if (number >= 1000 && number < 1_000_000) {
    return (number / 1000).toFixed(1) + 'K'
  } else if (number >= 1_000_000 && number < 1_000_000_000) {
    return (number / 1_000_000).toFixed(1) + 'M'
  } else if (number >= 1_000_000_000 && number < 1_000_000_000_000) {
    return (number / 1_000_000_000).toFixed(1) + 'B'
  } else if (number >= 1_000_000_000_000 && number < 1_000_000_000_000_000) {
    return (number / 1_000_000_000_000).toFixed(1) + 'T'
  }
}

const formatDateRelativeTime = (date: string) => {
  const dateObject = new Date(date)
  const now = new Date()
  const diff = now.getTime() - dateObject.getTime()
  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (days > 7) {
    return `Updated on ${dayjs(date).format('MMM DD, YYYY')}`
  } else if (days > 0) {
    return `Updated ${days} days ago`
  } else if (hours > 0) {
    return `Updated ${hours} hours ago`
  } else if (minutes > 0) {
    return `Updated ${minutes} minutes ago`
  } else if (seconds > 0) {
    return `Updated ${seconds} seconds ago`
  }
}

export { formatCompactNumber, formatDateRelativeTime }
