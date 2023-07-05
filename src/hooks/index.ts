import { useEffect } from 'react'
import { TUseOutsideAlerter } from './types.ts'

const useOutsideAlerter: TUseOutsideAlerter = (
  ref,
  onClickOutside,
  exceptions
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        exceptions &&
        exceptions.some(
          (exception) =>
            exception.current &&
            exception.current.contains(event.target as Node)
        )
      )
        return

      if (
        ref.current &&
        !ref.current.contains(event.target as HTMLInputElement)
      ) {
        onClickOutside()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}

export { useOutsideAlerter }
