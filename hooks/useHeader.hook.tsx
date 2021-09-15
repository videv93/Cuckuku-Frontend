import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
const useHeader = () => {

  const [hideHeader, setHideHeader] = useState(false)
  const router = useRouter();

  useEffect(() => {
    handleScroll()
    function handleScroll() {
      const hidden = window.pageYOffset >= 150
      setHideHeader(hidden)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })


  const onRedirect = (path) => {
    router.push(path || '/')
  }

  return { hideHeader, onRedirect }
}

export default useHeader
