import { sampleBlogData, sampleSearchResults } from "../utils/sample-data";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router'
import { useState } from "react";


const useSearchBox = () => {
  const router = useRouter();
  const [showSuggest, setShowSuggest] = useState(false)
  const [searching, setSearching] = useState(false)
  const [listAutocomplete, setListAutocomplete] = useState([])

  const onSearch = (search) => {
    console.log("🚀 ~ file: useSearchBox.hook.tsx ~ line 15 ~ onSearch ~ search", search)
    setShowSuggest(false)
    setSearching(true);
    setTimeout(() => {
      setShowSuggest(!!search)
      setSearching(false)
      setListAutocomplete(sampleSearchResults)
    }, 300000)
  }

  const formik = useFormik({
    initialValues: {
      search: ''
    },
    validationSchema: Yup.object({
      search: Yup.string()
        .required('Vui lòng nhập từ cần tìm kiếm'),
    }),
    onSubmit: values => {
    },



  });


  const onRedirect = (slug) => {
    router.push(`/blog/${slug}`)
  }

  return { formik, onSearch, onRedirect, showSuggest, setShowSuggest, listAutocomplete, searching }
}

export default useSearchBox
