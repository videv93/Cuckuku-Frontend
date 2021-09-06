import { useEffect, useState } from 'react'
const useHeader = () => {

  const [hideHeader, setHideHeader] = useState(false)


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



  return { hideHeader }
}

export default useHeader
