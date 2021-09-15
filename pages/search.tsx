import React from "react";
import { useRouter } from 'next/router'
import SearchBox from "../components/SearchBox";
import PageHeader from "../components/PageHeader";

const SearchPage = () => {
  const router = useRouter()
  const { s } = router.query
  return (
    <div>
      <PageHeader title="LIÊN HỆ"
        breadcrumbs={{ title: 'Trang chủ', url: '/' }} />
      <SearchBox></SearchBox>
      <p>Search text: {s}</p>
    </div >
  )
}
export default SearchPage
