import React from "react";
import { useRouter } from 'next/router'
import SearchBox from "../components/SearchBox";

const SearchPage = () => {
  const router = useRouter()
  const { s } = router.query
  return (
    <div>
      <SearchBox></SearchBox>
      <p>Search text: {s}</p>
    </div>
  )
}
export default SearchPage
