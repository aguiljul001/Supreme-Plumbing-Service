import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  // Initialize as false for a safe, standard fallback state on server-render
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  React.useEffect(() => {
    // Set up the listener against the clean tailwind md breakpoint boundary
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Sync state directly with the media query match rule instead of innerWidth
    const onChange = () => {
      setIsMobile(mql.matches)
    }

    // Modern standard listener binding
    mql.addEventListener("change", onChange)
    
    // Evaluate immediately on mount to override server default before paint
    setIsMobile(mql.matches)

    return () => mql.removeEventListener("change", onChange)
  }, [])

  return isMobile
}