import { useEffect, useRef } from 'react'

export default function useCloseOnClickOutside(onClose: () => void) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !ref.current?.contains(event.target)
      ) {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return [ref]
}
