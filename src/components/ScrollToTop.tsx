import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      // wait for the target page to render before scrolling to the section
      const timeout = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
      return () => clearTimeout(timeout)
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}
