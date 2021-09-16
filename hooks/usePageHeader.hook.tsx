import { sampleBlogData, sampleSearchResults } from "../utils/sample-data";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router'
import { useState } from "react";


const usePageHeader = () => {
  const router = useRouter();
  const onRedirect = (path) => {
    router.push(path || '/')
  }

  return { onRedirect }
}

export default usePageHeader
