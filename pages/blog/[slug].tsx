import React from "react";
import { useRouter } from 'next/router'

const SearchPage = () => {
  const router = useRouter()
  const { slug } = router.query
  return (
    <div>
      <p>Search text: {slug}</p>
    </div>
  )
}
export default SearchPage
