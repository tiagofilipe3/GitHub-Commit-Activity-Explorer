import { RefObject } from 'react'

type TUseOutsideAlerter = (
  ref: RefObject<HTMLInputElement>,
  onClickOutside: () => void,
  exceptions?: RefObject<HTMLInputElement>[]
) => void

export type { TUseOutsideAlerter }
