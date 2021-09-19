import { sampleBlogData, sampleSearchResults } from "../utils/sample-data";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router'
import { useState } from "react";
import {gql} from "graphql-request";
import client from "../utils/client";


const useSearchBox = () => {
  const router = useRouter();
  const [showSuggest, setShowSuggest] = useState(false)
  const [searching, setSearching] = useState(false)
  const [listAutocomplete, setListAutocomplete] = useState([])

  const onSearch = async (search) => {
    setShowSuggest(false)
    setSearching(true);
    const query = gql`
      query Posts($search: String!) {
        posts(orderBy: createdAt_DESC, first: 5, where: {_search: $search}) {
          slug
          tittle
          thumbnail {
            url
            id
          }
        }
      }
      `;
    const searchResults = await client.request(query, { search });
    setShowSuggest(!!search)
    setSearching(false);
    setListAutocomplete(searchResults.posts)
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
      const {search} = values;
      router.push({
        pathname: '/blog',
        query: { s: search }
      })
    },
  });


  const onRedirect = (slug) => {
    router.push(`/blog/${slug}`)
  }

  return { formik, onSearch, onRedirect, showSuggest, setShowSuggest, listAutocomplete, searching }
}

export default useSearchBox
